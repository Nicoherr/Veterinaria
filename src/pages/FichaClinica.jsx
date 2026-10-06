import React, { useState } from 'react';

const FichaClinica = () => {
  // Estado para seleccionar la mascota activa
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState('max');

  // Datos simulados del paciente y su historial médico
  const pacientes = {
    max: {
      nombre: 'Max',
      especie: 'Canino',
      raza: 'Golden Retriever',
      edad: '3 años',
      peso: '28.5 kg',
      chip: '985141002391029',
      tutor: 'Nicolás Herrera',
      alergias: 'Ninguna conocida',
      imagen: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80',
      historial: [
        {
          id: 1,
          fecha: '15 Sep 2026',
          tipo: 'Consulta General',
          veterinario: 'Dr. Alejandro Silva',
          diagnostico: 'Chequeo semestral en perfecto estado. Peso estable.',
          tratamiento: 'Continuar con alimento super premium y antiparasitario.',
          estado: 'Completado'
        },
        {
          id: 2,
          fecha: '10 Mayo 2026',
          tipo: 'Vacunación',
          veterinario: 'Dra. Camila Rojas',
          diagnostico: 'Aplicación de refuerzo Sextuple y Antirrábica.',
          tratamiento: 'Reposo relativo por 24 hrs.',
          estado: 'Completado'
        }
      ],
      vacunas: [
        { nombre: 'Séxtuple Canina', fecha: '10/05/2026', proxima: '10/05/2027', estado: 'Al día' },
        { nombre: 'Antirrábica', fecha: '10/05/2026', proxima: '10/05/2027', estado: 'Al día' },
        { nombre: 'KC (Tos de las perreras)', fecha: '12/11/2025', proxima: '12/11/2026', estado: 'Próxima' }
      ]
    },
    luna: {
      nombre: 'Luna',
      especie: 'Felino',
      raza: 'Siamés',
      edad: '2 años',
      peso: '4.2 kg',
      chip: '985141009988112',
      tutor: 'Nicolás Herrera',
      alergias: 'Sensibilidad a granos',
      imagen: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80',
      historial: [
        {
          id: 1,
          fecha: '02 Ago 2026',
          tipo: 'Desparasitación',
          veterinario: 'Dra. Camila Rojas',
          diagnostico: 'Control de peso y desparasitación interna periódica.',
          tratamiento: 'Pipeta antiparasitaria aplicada en clínica.',
          estado: 'Completado'
        }
      ],
      vacunas: [
        { nombre: 'Triple Felina', fecha: '15/01/2026', proxima: '15/01/2027', estado: 'Al día' },
        { nombre: 'Leucemia Felina', fecha: '15/01/2026', proxima: '15/01/2027', estado: 'Al día' }
      ]
    }
  };

  const pacienteActual = pacientes[mascotaSeleccionada];

  return (
    <div style={{ color: '#e5e7eb', maxWidth: '1100px', margin: '2rem auto', padding: '0 1rem' }}>
      
      {/* Encabezado */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
          📋 Ficha Clínica Digital
        </h1>
        <p style={{ color: '#a39e99' }}>
          Consulta el historial médico, esquema de vacunación y diagnósticos de tus mascotas.
        </p>
      </div>

      {/* Selector de Mascota */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {Object.keys(pacientes).map((key) => (
          <button
            key={key}
            onClick={() => setMascotaSeleccionada(key)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: mascotaSeleccionada === key ? '#c68b59' : '#38332e',
              backgroundColor: mascotaSeleccionada === key ? 'rgba(198, 139, 89, 0.15)' : '#24201d',
              color: mascotaSeleccionada === key ? '#c68b59' : '#a39e99',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            🐾 {pacientes[key].nombre} ({pacientes[key].especie})
          </button>
        ))}
      </div>

      {/* Tarjeta Resumen del Paciente */}
      <div style={{
        backgroundColor: '#24201d',
        border: '1px solid #38332e',
        borderRadius: '20px',
        padding: '1.8rem',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '2rem',
        alignItems: 'center',
        marginBottom: '2.5rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
      }}>
        <img 
          src={pacienteActual.imagen} 
          alt={pacienteActual.nombre} 
          style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #c68b59' }} 
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#a39e99', display: 'block' }}>Nombre Paciente</span>
            <strong style={{ fontSize: '1.2rem', color: '#ffffff' }}>{pacienteActual.nombre}</strong>
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#a39e99', display: 'block' }}>Raza / Especie</span>
            <span style={{ color: '#ffffff' }}>{pacienteActual.raza}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#a39e99', display: 'block' }}>Edad / Peso</span>
            <span style={{ color: '#ffffff' }}>{pacienteActual.edad} • {pacienteActual.peso}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#a39e99', display: 'block' }}>Microchip Nº</span>
            <code style={{ color: '#c68b59', backgroundColor: '#181513', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>
              {pacienteActual.chip}
            </code>
          </div>
        </div>
      </div>

      {/* Grid Principal: Historial Atenciones + Esquema Vacunación */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        
        {/* Historial de Consultas */}
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🩺 Historial de Consultas
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {pacienteActual.historial.map((item) => (
              <div key={item.id} style={{
                backgroundColor: '#24201d',
                border: '1px solid #38332e',
                borderRadius: '16px',
                padding: '1.2rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{ color: '#c68b59', fontWeight: 700, fontSize: '0.9rem' }}>{item.tipo}</span>
                  <span style={{ fontSize: '0.8rem', color: '#a39e99' }}>{item.fecha}</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#ffffff', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Atendido por: {item.veterinario}
                </p>
                <p style={{ fontSize: '0.88rem', color: '#a39e99', marginBottom: '0.6rem' }}>
                  <strong>Diagnóstico:</strong> {item.diagnostico}
                </p>
                <div style={{
                  backgroundColor: '#1c1917',
                  padding: '0.6rem 0.8rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: '#d1d5db',
                  borderLeft: '3px solid #c68b59'
                }}>
                  💊 <strong>Tratamiento:</strong> {item.tratamiento}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Control de Vacunas */}
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            💉 Registro de Vacunas
          </h2>
          <div style={{ backgroundColor: '#24201d', border: '1px solid #38332e', borderRadius: '16px', padding: '1.2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pacienteActual.vacunas.map((vac, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: idx !== pacienteActual.vacunas.length - 1 ? '0.8rem' : 0,
                  borderBottom: idx !== pacienteActual.vacunas.length - 1 ? '1px solid #38332e' : 'none'
                }}>
                  <div>
                    <strong style={{ display: 'block', color: '#ffffff', fontSize: '0.95rem' }}>{vac.nombre}</strong>
                    <span style={{ fontSize: '0.8rem', color: '#a39e99' }}>
                      Aplicada: {vac.fecha} | Próxima: {vac.proxima}
                    </span>
                  </div>
                  <span style={{
                    padding: '0.25rem 0.6rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: vac.estado === 'Al día' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(234, 179, 8, 0.15)',
                    color: vac.estado === 'Al día' ? '#4ade80' : '#facc15',
                    border: `1px solid ${vac.estado === 'Al día' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(234, 179, 8, 0.3)'}`
                  }}>
                    {vac.estado}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FichaClinica;