import { useEffect, useState } from 'react';

function RotatingText({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="rotating-text">
      <span key={index} className="rotating-word">{words[index]}</span>
    </span>
  );
}

export default RotatingText;
