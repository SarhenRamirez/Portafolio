import { profile } from '../data/portafolio';

function Contact() {
  return (
    <section className="page section contact-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Contacto</p>
          <h2>Conecta conmigo</h2>
          <p>Busco mi próximo rol como Backend Developer. Si tienes una vacante o un proyecto, escríbeme.</p>
        </div>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="contact-link">
            <span className="contact-link-label">Email</span>
            <span className="contact-link-value">{profile.email}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-label">LinkedIn</span>
            <span className="contact-link-value">linkedin.com/in/sarhen-ramirez-657a012a0</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-label">GitHub</span>
            <span className="contact-link-value">github.com/SarhenRamirez</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
