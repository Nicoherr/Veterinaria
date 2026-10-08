import React from 'react';
import { Link } from 'react-router-dom';

export default function MisMascotas({ darkMode }) {
  // Colores dinámicos según el modo
  const textColor = darkMode ? '#f8fafc' : '#0f172a';
  const subTextColor = darkMode ? '#cbd5e1' : '#475569';
  const cardBg = darkMode ? '#1e293b' : '#ffffff';
  const borderColor = darkMode ? '#334155' : '#e2e8f0';
  const badgeBg = darkMode ? '#0f172a' : '#f1f5f9';

  const mascotas = [
    {
      id: 1,
      nombre: 'Max',
      tipo: 'Perro',
      raza: 'Golden Retriever',
      edad: '3 años',
      microchip: '982000123456789',
      imagen: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80',
      vacunas: ['Octúpule (Al día)', 'Antirrábica (Al día)'],
      historial: [
        { fecha: '10/01/2026', detalle: 'Consulta general' },
        { fecha: '15/05/2026', detalle: 'Vacunación' }
      ]
    },
    {
      id: 2,
      nombre: 'Luna',
      tipo: 'Gato',
      raza: 'Siamés',
      edad: '2 años',
      microchip: '982000987654321',
      imagen: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80',
      vacunas: ['Triple Felina (Al día)'],
      historial: [
        { fecha: '20/02/2026', detalle: 'Desparasitación' }
      ]
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      {/* Encabezado y Botón Añadir */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#38bdf8', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🐾 Mis Mascotas Registradas
          </h1>
          <p style={{ color: subTextColor, margin: '0.4rem 0 0 0', fontSize: '1rem' }}>
            Gestiona la información médica, vacunas e historial de tus compañeros.
          </p>
        </div>

        <button style={{
          backgroundColor: '#0284c7',
          color: '#ffffff',
          padding: '0.75rem 1.25rem',
          borderRadius: '8px',
          border: 'none',
          fontWeight: '600',
          fontSize: '0.95rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          ➕ Registrar Nueva Mascota
        </button>
      </div>

      {/* Rejilla de Tarjetas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        {mascotas.map((m) => (
          <div
            key={m.id}
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: darkMode ? '0 10px 25px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s ease, background-color 0.3s ease'
            }}
          >
            {/* Foto de la Mascota */}
            <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
              <img src={m.imagen} alt={m.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: '#0284c7',
                color: '#ffffff',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {m.tipo}
              </span>
            </div>

            {/* Contenido de la Tarjeta */}
            <div style={{ padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: textColor, margin: '0 0 1rem 0' }}>
                {m.nombre}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: subTextColor, fontSize: '0.92rem', marginBottom: '1.2rem' }}>
                <p style={{ margin: 0 }}><strong>Raza:</strong> {m.raza}</p>
                <p style={{ margin: 0 }}><strong>Edad:</strong> {m.edad}</p>
                <p style={{ margin: 0 }}><strong>Microchip:</strong> {m.microchip}</p>
              </div>

              <hr style={{ borderColor: borderColor, margin: '1rem 0' }} />

              {/* Vacunas */}
              <div style={{ marginBottom: '1.2rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#38bdf8', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  💉 Vacunas Registradas
                </h3>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: subTextColor, fontSize: '0.88rem' }}>
                  {m.vacunas.map((v, idx) => (
                    <li key={idx}>{v}</li>
                  ))}
                </ul>
              </div>

              {/* Historial */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#38bdf8', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  📋 Historial Reciente
                </h3>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: subTextColor, fontSize: '0.88rem' }}>
                  {m.historial.map((h, idx) => (
                    <li key={idx}>{h.detalle} - <em>{h.fecha}</em></li>
                  ))}
                </ul>
              </div>

              {/* Botón ver ficha */}
              <Link
                to="/ficha"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: badgeBg,
                  color: textColor,
                  border: `1px solid ${borderColor}`,
                  padding: '0.6rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                Ver Ficha Clínica Completa
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}