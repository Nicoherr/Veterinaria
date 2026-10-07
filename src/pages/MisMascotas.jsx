import React from 'react';

const MisMascotas = ({ modoOscuro }) => {
  const mascotas = [
    { id: 1, nombre: 'Max', especie: 'Perro', raza: 'Golden Retriever', edad: '3 años' },
    { id: 2, nombre: 'Luna', especie: 'Gato', raza: 'Siamés', edad: '2 años' }
  ];

  const cardBackground = modoOscuro ? '#1e293b' : '#ffffff';
  const cardBorder = modoOscuro ? '#334155' : '#e2e8f0';
  const textColor = modoOscuro ? '#f8fafc' : '#0f172a';
  const subtitleColor = modoOscuro ? '#94a3b8' : '#64748b';

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: textColor, marginBottom: '0.5rem' }}>
          Mis Pacientes y Mascotas
        </h1>
        <p style={{ color: subtitleColor, fontSize: '0.95rem' }}>
          Gestiona la información médica y ficha de tus mascotas asociadas.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {mascotas.map((mascota) => (
          <div
            key={mascota.id}
            style={{
              backgroundColor: cardBackground,
              borderRadius: '12px',
              padding: '1.5rem',
              border: `1px solid ${cardBorder}`,
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              transition: 'background-color 0.3s ease, border-color 0.3s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: modoOscuro ? '#334155' : '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem'
              }}>
                🐾
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: textColor, margin: 0 }}>
                  {mascota.nombre}
                </h3>
                <span style={{ fontSize: '0.85rem', color: subtitleColor }}>
                  {mascota.especie} - {mascota.raza}
                </span>
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${cardBorder}`, paddingTop: '0.75rem', fontSize: '0.875rem', color: subtitleColor }}>
              <p style={{ margin: '0.25rem 0' }}><strong>Edad:</strong> {mascota.edad}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisMascotas;