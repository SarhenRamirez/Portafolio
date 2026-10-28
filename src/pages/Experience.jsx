import { experience } from '../data/portafolio';

function Experience() {
  return (
    <section className="page section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Experiencia</p>
          <h2>Trayectoria y proyectos</h2>
        </div>
        <div className="cards-grid">
          {experience.map((item) => (
            <article className="project-card" key={item.title}>
              <div className="project-tag">{item.title}</div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
