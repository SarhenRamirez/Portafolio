import { useEffect, useRef, useState } from 'react';

function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const node = ref.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!node || reduceMotion || !('IntersectionObserver' in window)) {
      setCurrent(value);
      return undefined;
    }

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setCurrent(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return <span ref={ref}>{current}</span>;
}

export default CountUp;
