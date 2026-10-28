import { Link } from 'react-router-dom';
import { profile } from '../data/portafolio';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 {profile.name}. Diseñado y desarrollado con React.</p>
        <div className="footer-links">
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Contacto</Link>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
