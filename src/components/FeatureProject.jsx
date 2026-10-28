import { useState } from 'react';

function EndpointPreview({ title, endpoints }) {
  return (
    <div className="terminal endpoint-preview">
      <div className="terminal-bar">
        <span /><span /><span />
        <p>{title.toLowerCase().replace(/\s+/g, '-')}</p>
      </div>
      <ul className="endpoint-list">
        {endpoints.map(([method, path]) => (
          <li key={`${method} ${path}`}>
            <span className={`method method-${method.toLowerCase()}`}>{method}</span>
            <code>{path}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureProject({ project, reverse = false }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = Boolean(project.image) && !imgFailed;

  return (
    <article className={`feature-project spotlight${reverse ? ' is-reverse' : ''}`}>
      <div className="feature-project-media">
        {showImage && (
          <a href={project.image} target="_blank" rel="noopener noreferrer" className="project-shot">
            <img
              src={project.image}
              alt={project.imageAlt || `Captura de ${project.title}`}
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          </a>
        )}
        <EndpointPreview title={project.title} endpoints={project.endpoints} />
      </div>

      <div className="feature-project-body">
        <div className="project-meta">
          <span className="project-tag">{project.category}</span>
          {project.team && <span className="project-team">{project.team}</span>}
        </div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.description}</p>

        <h4 className="highlights-title">{project.highlightsTitle}</h4>
        <ul className="highlights-list">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="tech-list">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="feature-project-actions">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver demo ↗</a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Repositorio ↗</a>
        </div>
      </div>
    </article>
  );
}

export default FeatureProject;
