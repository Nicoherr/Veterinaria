import React from 'react';

const Home = ({ modoOscuro }) => {
  // Paleta dinámica
  const cardBg = modoOscuro ? '#1e293b' : '#ffffff';
  const cardBorder = modoOscuro ? '#334155' : '#e2e8f0';
  const textColor = modoOscuro ? '#f8fafc' : '#0f172a';
  const subtextColor = modoOscuro ? '#94a3b8' : '#64748b';

  const servicios = [
    {
      titulo: 'Consulta General',
      desc: 'Evaluación médica integral y seguimiento continuo para tu mascota.',
      img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80'
    },
    {
      titulo: 'Vacunación y Chipeo',
      desc: 'Esquema de inmunización actualizado y registro oficial.',
      img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80'
    },
    {
      titulo: 'Exámenes y Diagnóstico',
      desc: 'Laboratorio clínico y ecografías de alta resolución.',
      img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Banner Principal / Hero */}
      <div style={{
        backgroundColor: cardBg,
        borderRadius: '16px',
        padding: '2.5rem',
        border: `1px solid ${cardBorder}`,
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        alignItems: 'center',
        marginBottom: '3rem',
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}>
        <div>
          <span style={{
            backgroundColor: modoOscuro ? '#1e3a8a' : '#eff6ff',
            color: modoOscuro ? '#93c5fd' : '#1e3a8a',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase'
          }}>
            Centro Médico Veterinario
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: textColor, margin: '1rem 0 0.5rem' }}>
            Atención veterinaria especializada y de alta precisión
          </h1>
          <p style={{ color: subtextColor, fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Consultas generales, diagnóstico clínico por imágenes, esquema de inmunización y ficha médica digitalizada en una sola plataforma.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="/citas" style={{
              backgroundColor: '#1e3a8a',
              color: '#ffffff',
              padding: '0.75rem 1.25rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              Reservar Cita Médica
            </a>
            <a href="/mismascotas" style={{
              backgroundColor: 'transparent',
              color: textColor,
              border: `1px solid ${cardBorder}`,
              padding: '0.75rem 1.25rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              Ver Mis Pacientes
            </a>
          </div>
        </div>

        <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&w=800&q=80"
            alt="Atención veterinaria"
            style={{ width: '100%', height: '280px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Tarjetas de Servicios */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {servicios.map((s, idx) => (
          <div key={idx} style={{
            backgroundColor: cardBg,
            borderRadius: '12px',
            border: `1px solid ${cardBorder}`,
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            transition: 'background-color 0.3s ease, border-color 0.3s ease'
          }}>
            <img src={s.img} alt={s.titulo} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: textColor, margin: '0 0 0.5rem' }}>{s.titulo}</h3>
              <p style={{ color: subtextColor, fontSize: '0.875rem', margin: 0, lineHeight: '1.5' }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;