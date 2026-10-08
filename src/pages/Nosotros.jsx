import React from 'react';

export default function Nosotros({ darkMode }) {
  const textColor = darkMode ? '#f8fafc' : '#0f172a';
  const subTextColor = darkMode ? '#cbd5e1' : '#475569';
  const cardBg = darkMode ? '#1e293b' : '#ffffff';
  const borderColor = darkMode ? '#334155' : '#e2e8f0';

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2.2rem', textAlign: 'center', color: '#38bdf8', marginBottom: '1.5rem', fontWeight: 'bold' }}>
        Sobre VetSM
      </h1>
      <p style={{ textAlign: 'center', color: subTextColor, maxWidth: '700px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
        Somos una clínica veterinaria dedicada a brindar la mejor atención médica, quirúrgica y preventiva para tus mascotas en Santiago.
      </p>

      {/* Tarjetas de Misión y Visión */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.4rem', color: textColor, marginBottom: '1rem' }}>🎯 Nuestra Misión</h2>
          <p style={{ color: subTextColor, lineHeight: '1.6' }}>
            Proporcionar cuidados médicos de la más alta calidad con empatía, profesionalismo y tecnología avanzada para asegurar una vida larga y saludable a cada paciente.
          </p>
        </div>

        <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.4rem', color: textColor, marginBottom: '1rem' }}>👁️ Nuestra Visión</h2>
          <p style={{ color: subTextColor, lineHeight: '1.6' }}>
            Ser la red veterinaria líder en la región, reconocida por la excelencia médica, la innovación contínua en fichas digitales y el trato humano hacia las mascotas y sus familias.
          </p>
        </div>
      </div>
    </div>
  );
}