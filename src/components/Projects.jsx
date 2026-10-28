import { projects } from '../data/portafolio';
import FeatureProject from './FeatureProject';
import Reveal from './Reveal';

function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section className="page section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Proyectos</p>
          <h2>Backends en los que he trabajado</h2>
          <p>APIs con autenticación, pagos, tiempo real y tests, construidas en equipo y por mi cuenta.</p>
        </div>

        {featured.length > 0 && (
          <div className="feature-project-grid">
            {featured.map((project, i) => (
              <Reveal key={project.title}>
                <FeatureProject project={project} reverse={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <>
            <h3 className="subsection-title">Otros proyectos</h3>
            <div className="cards-grid">
              {rest.map((project, i) => (
                <Reveal key={project.title} delay={i * 100}>
                  <article className="project-card spotlight">
                    <div className="project-tag">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">Ver repositorio ↗</a>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
