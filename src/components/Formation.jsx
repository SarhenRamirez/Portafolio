import { formation } from '../data/portafolio';

function Formation() {
  return (
    <section className="page section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Formación</p>
          <h2>Estudios y capacitación</h2>
        </div>
        <div className="cards-grid">
          {formation.map((item) => (
            <article className="project-card" key={item.title}>
              <div className="project-tag">{item.period}</div>
              <h3>{item.title}</h3>
              <p className="formation-institution">{item.institution}</p>
              <p>{item.description}</p>
              {item.certified && item.certUrl && (
                <a href={item.certUrl} target="_blank" rel="noopener noreferrer" className="cert-badge cert-badge-link">
                  Ver certificado
                </a>
              )}
              {item.certified && !item.certUrl && (
                <span className="cert-badge">Certificado disponible</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formation;
