import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data/portafolio';

const navItems = [
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/formacion', label: 'Formación' },
  { to: '/experiencia', label: 'Experiencia' },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/contacto', label: 'Contacto' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <Link to="/" className="brand">{profile.name}</Link>
        <p className="sidebar-role">{profile.role} · {profile.secondaryRole}</p>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <a href={profile.cvUrl} download className="sidebar-cv">Descargar CV</a>
        <a href={`mailto:${profile.email}`} className="sidebar-email">{profile.email}</a>
        <div className="sidebar-social">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
