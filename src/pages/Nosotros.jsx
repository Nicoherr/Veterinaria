import React from 'react';

const Nosotros = ({ modoOscuro }) => {
  // Paleta dinámica
  const cardBg = modoOscuro ? '#1e293b' : '#ffffff';
  const cardBorder = modoOscuro ? '#334155' : '#e2e8f0';
  const textColor = modoOscuro ? '#f8fafc' : '#0f172a';
  const subtextColor = modoOscuro ? '#cbd5e1' : '#475569';

  const equipo = [
    {
      nombre: 'Dra. Valentina Silva',
      cargo: 'Directora Médica & Cirugía',
      img: 'https://images.unsplash.com/photo-1594824813566-78a913f044b7?auto=format&fit=crop&w=600&q=80'
    },
    {
      nombre: 'Dr. Carlos Mendoza',
      cargo: 'Especialista en Felinos y Medicina Interna',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
    },
    {
      nombre: 'Dra. Camila Morales',
      cargo: 'Diagnóstico por Imágenes & Ecografía',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Sección Quiénes Somos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        alignItems: 'center',
        marginBottom: '3rem'
      }}>
        <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
            alt="Instalaciones del centro"
            style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px' }}
          />
        </div>

        <div>
          <p style={{ color: subtextColor, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Proporcionar medicina veterinaria de vanguardia basada en la evidencia, con instalaciones equipadas para quirófano, imágenes y pabellón de urgencias.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{
              backgroundColor: cardBg,
              border: `1px solid ${cardBorder}`,
              padding: '1.25rem',
              borderRadius: '12px',
              transition: 'background-color 0.3s ease'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: modoOscuro ? '#93c5fd' : '#1e3a8a', margin: 0 }}>
                +10 Años
              </h3>
              <p style={{ color: subtextColor, fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                De trayectoria clínica
              </p>
            </div>

            <div style={{
              backgroundColor: cardBg,
              border: `1px solid ${cardBorder}`,
              padding: '1.25rem',
              borderRadius: '12px',
              transition: 'background-color 0.3s ease'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: modoOscuro ? '#93c5fd' : '#1e3a8a', margin: 0 }}>
                100%
              </h3>
              <p style={{ color: subtextColor, fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                Especialistas certificados
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Equipo Médico */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: textColor, marginBottom: '1.5rem' }}>
        Nuestro Equipo de Especialistas
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {equipo.map((medico, idx) => (
          <div key={idx} style={{
            backgroundColor: cardBg,
            borderRadius: '12px',
            border: `1px solid ${cardBorder}`,
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            textAlign: 'center',
            transition: 'background-color 0.3s ease, border-color 0.3s ease'
          }}>
            <img
              src={medico.img}
              alt={medico.nombre}
              style={{ width: '100%', height: '240px', objectFit: 'cover', objectPosition: 'top' }}
            />
            <div style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: textColor, margin: '0 0 0.25rem' }}>
                {medico.nombre}
              </h3>
              <p style={{ color: subtextColor, fontSize: '0.85rem', margin: 0 }}>
                {medico.cargo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nosotros;