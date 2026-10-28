import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import { projects } from '../data/portafolio';

function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />

      <section className="section home-projects">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Proyectos destacados</p>
              <h2>Lo que he construido</h2>
            </div>
            <Link to="/proyectos" className="link-arrow">Ver todos los detalles →</Link>
          </div>

          <div className="cards-grid">
            {featured.map((project, i) => (
              <Reveal key={project.title} delay={i * 120}>
                <Link to="/proyectos" className="project-card preview-card spotlight">
                  <div className="project-meta">
                    <span className="project-tag">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <div className="tech-list">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default Home;
