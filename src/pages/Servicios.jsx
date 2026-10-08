import React from 'react';

export default function Servicios({ darkMode }) {
  const textColor = darkMode ? '#f8fafc' : '#0f172a';
  const subTextColor = darkMode ? '#cbd5e1' : '#475569';
  const cardBg = darkMode ? '#1e293b' : '#ffffff';
  const borderColor = darkMode ? '#334155' : '#e2e8f0';

  const listaServicios = [
    { icono: '🩺', titulo: 'Consulta General', desc: 'Evaluación médica integral, medicina preventiva y chequeos de rutina.' },
    { icono: '💉', titulo: 'Vacunación y Desparasitación', desc: 'Planes completos para perros, gatos y animales exóticos.' },
    { icono: '🔬', titulo: 'Exámenes de Laboratorio', desc: 'Análisis de sangre, orina y biopsias con resultados rápidos.' },
    { icono: '🏥', titulo: 'Cirugías e Pabellón', desc: 'Procedimientos esterilizadores y cirugías complejas con anestesia inhalatoria.' },
    { icono: '🚨', titulo: 'Urgencias 24/7', desc: 'Atención médica inmediata ante accidentes o afecciones graves.' },
    { icono: '🪥', titulo: 'Limpieza Dental', desc: 'Profilaxis profiláctica con ultrasonido para la salud bucal.' }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2.2rem', textAlign: 'center', color: '#38bdf8', marginBottom: '1rem', fontWeight: 'bold' }}>
        Nuestros Servicios Médicos
      </h1>
      <p style={{ textAlign: 'center', color: subTextColor, marginBottom: '3rem', fontSize: '1.05rem' }}>
        Ofrecemos cobertura veterinaria completa con especialistas e infraestructura de vanguardia.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.8rem' }}>
        {listaServicios.map((srv, index) => (
          <div key={index} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, padding: '1.8rem', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{srv.icono}</div>
            <h3 style={{ fontSize: '1.25rem', color: textColor, marginBottom: '0.5rem', fontWeight: 'bold' }}>{srv.titulo}</h3>
            <p style={{ color: subTextColor, fontSize: '0.95rem', lineHeight: '1.5' }}>{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}