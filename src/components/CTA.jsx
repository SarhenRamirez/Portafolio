import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="section cta-section">
      <div className="container cta-box">
        <div>
          <p className="eyebrow">¿Buscas una Backend Developer?</p>
          <h2>Hablemos de tu equipo.</h2>
        </div>
        <Link to="/contacto" className="btn btn-primary">Contactar ahora</Link>
      </div>
    </section>
  );
}

export default CTA;
