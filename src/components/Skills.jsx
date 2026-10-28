import { skillGroups } from '../data/portafolio';
import Reveal from './Reveal';

function Skills() {
  return (
    <section className="page section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Habilidades</p>
          <h2>Stack y herramientas</h2>
          <p>Enfocada en backend con Node.js: desde el modelado de datos hasta los tests y el despliegue.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <Reveal key={group.group} delay={i * 80} className="skill-group spotlight">
              <h3>{group.group}</h3>
              <div className="skill-list">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
