import { Link } from 'react-router-dom';
import { heroStats, heroWords, profile } from '../data/portafolio';
import CountUp from './CountUp';
import Reveal from './Reveal';
import RotatingText from './RotatingText';

const responseLines = [
  '{',
  `  "name": "${profile.name}",`,
  `  "role": "${profile.role}",`,
  `  "alsoAs": "${profile.secondaryRole}",`,
  '  "stack": ["NestJS", "Express", "PostgreSQL"],',
  '  "frontend": ["React", "Tailwind CSS"],',
  '  "testing": ["Jest", "Vitest", "e2e"],',
  '  "devops": ["Docker", "GitHub Actions"],',
  `  "location": "${profile.location}",`,
  '  "openToWork": true',
  '}',
];

const TOKEN = /(?<key>"[^"]*")(?=:)|(?<str>"[^"]*")|(?<lit>\btrue\b|\bfalse\b|\b\d+\b)/g;

function highlight(line) {
  const out = [];
  let last = 0;
  for (const match of line.matchAll(TOKEN)) {
    out.push(line.slice(last, match.index));
    const type = Object.keys(match.groups).find((key) => match.groups[key]);
    out.push(<span key={match.index} className={`tok-${type}`}>{match[0]}</span>);
    last = match.index + match[0].length;
  }
  out.push(line.slice(last));
  return out;
}

function Hero() {
  return (
    <section className="hero page">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="status-pill">
            <span className="status-dot" />
            Disponible para roles backend y full stack
          </span>
          <p className="hero-hello">Hola, soy {profile.name}</p>
          <h1>
            Construyo APIs
            <br />
            <RotatingText words={heroWords} />
          </h1>
          <p className="hero-text">
            Desarrolladora backend y full stack, egresada de Henry. Diseño APIs REST con NestJS
            y Express, modelo bases de datos en PostgreSQL y me ocupo de lo que no se ve:
            autenticación, pagos, notificaciones, tests y despliegue. Cuando hace falta, también
            construyo la interfaz con React.
          </p>
          <div className="hero-actions">
            <Link to="/proyectos" className="btn btn-primary">Ver proyectos</Link>
            <a href={profile.cvUrl} download className="btn btn-secondary">Descargar CV</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub ↗</a>
          </div>
        </div>

        <div className="terminal hero-terminal" aria-label="Resumen de perfil en formato JSON">
          <div className="terminal-bar">
            <span /><span /><span />
            <p>sarhen-api</p>
          </div>
          <pre className="terminal-body">
            <span className="term-line" style={{ '--i': 0 }}>
              <span className="method method-get">GET</span> /api/sarhen
            </span>
            <span className="term-line term-status" style={{ '--i': 1 }}>HTTP/1.1 200 OK</span>
            {responseLines.map((line, i) => (
              <span className="term-line" style={{ '--i': i + 2 }} key={line}>
                {highlight(line)}
              </span>
            ))}
            <span className="term-line term-cursor" style={{ '--i': responseLines.length + 2 }} />
          </pre>
        </div>
      </div>

      <div className="container hero-stats">
        {heroStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 120} className="hero-stat">
            <strong><CountUp value={stat.value} /></strong>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Hero;
