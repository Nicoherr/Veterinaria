import React from 'react';

const Nosotros = () => {
  return (
    <div className="container" style={{ paddingBottom: '3rem' }}>
      <section className="hero-banner">
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.8rem', fontWeight: 800 }}>
          Sobre Veterinaria San Marcos
        </h1>
        <p style={{ maxWidth: '650px', margin: '0 auto', opacity: 0.9 }}>
          Más de 10 años brindando atención médica integral, compasiva y tecnológicamente avanzada para el bienestar de tu mascota.
        </p>
      </section>

      <div className="grid-cards">
        <div className="card">
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Nuestra Misión</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Ofrecer servicios veterinarios de alta calidad combinando la calidez humana con herramientas digitales modernas para agilizar la atención de cada paciente.
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Nuestra Visión</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Ser el centro veterinario de referencia regional, destacado por la excelencia médica, el cuidado empático y el acceso transparente a historiales clínicos.
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Valores</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Compromiso animal, ética profesional, innovación constante y trato cercano con las familias de nuestros pacientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;