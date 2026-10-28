import Reveal from '../components/Reveal';

function AboutMe() {
  return (
    <section className="page section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Sobre mí</p>
          <h2>Me gusta lo que pasa detrás de la pantalla.</h2>
        </div>
        <Reveal className="about-copy">
          <p>
            Soy desarrolladora backend en Bogotá, Colombia. Me formé en la Carrera Full Stack Developer de Henry con especialización en backend, y aprobé el proyecto final con Vesta, una plataforma de alquileres en producción donde trabajé en el equipo de backend junto a otras cinco personas.
          </p>
          <p>
            Disfruto diseñar APIs claras y seguras, modelar bases de datos y resolver los problemas que aparecen cuando el código sale a producción: un proveedor que bloquea SMTP, una suite de tests que se rompe tras actualizar el framework o una búsqueda que necesita filtrar por cercanía.
          </p>
          <ul className="about-list">
            <li>APIs REST con NestJS y Express, documentadas con Swagger</li>
            <li>PostgreSQL con TypeORM y Prisma: modelado, relaciones y migraciones</li>
            <li>Autenticación con JWT, Google OAuth y control de acceso por roles</li>
            <li>Tests unitarios y e2e, Docker y CI con GitHub Actions</li>
            <li>Trabajo en equipo con Git, Pull Requests y tickets en Jira</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutMe;
