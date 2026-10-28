import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TopLoader from './components/TopLoader';
import PageFade from './components/PageFade';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Formation from './components/Formation';
import Contact from './components/Contact';
import Home from './pages/Home';
import Experience from './pages/Experience';
import AboutMe from './pages/AboutMe';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Brillo que sigue al cursor en las tarjetas con clase .spotlight
  useEffect(() => {
    const onMove = (event) => {
      const card = event.target.closest?.('.spotlight');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', onMove);
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <>
      <TopLoader />
      <div className="app-shell">
        <Sidebar />

        <div className="main-content">
          <main>
            <PageFade key={location.pathname}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/proyectos" element={<Projects />} />
                <Route path="/habilidades" element={<Skills />} />
                <Route path="/formacion" element={<Formation />} />
                <Route path="/experiencia" element={<Experience />} />
                <Route path="/sobre-mi" element={<AboutMe />} />
                <Route path="/contacto" element={<Contact />} />
              </Routes>
            </PageFade>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
