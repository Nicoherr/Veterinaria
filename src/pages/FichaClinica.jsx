import React, { useState } from 'react';

const FichaClinica = () => {
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState('max');

  const pacientes = {
    max: {
      nombre: 'Max',
      especie: 'Canino',
      raza: 'Golden Retriever',
      edad: '3 años',
      peso: '28.5 kg',
      chip: '985141002391029',
      tutor: 'Nicolás Herrera',
      alergias: 'Sin alergias registradas',
      historial: [
        {
          id: 'CONS-2026-09',
          fecha: '15/09/2026',
          tipo: 'Consulta General',
          veterinario: 'Dr. Alejandro Silva (MV Reg. 4812)',
          diagnostico: 'Examen preventivo semestral. Constantes vitales dentro de rangos normales.',
          indicaciones: 'Mantener dieta balanceada. Se autoriza certificado de salud.'
        },
        {
          id: 'VAC-2026-05',
          fecha: '10/05/2026',
          tipo: 'Vacunación',
          veterinario: 'Dra. Camila Rojas (MV Reg. 5120)',
          diagnostico: 'Inmunización anual.',
          indicaciones: 'Refuerzo Séxtuple y Antirrábica administrados sin complicaciones.'
        }
      ],
      vacunas: [
        { nombre: 'Séxtuple Canina', fecha: '10/05/2026', proxima: '10/05/2027', estado: 'Vigente' },
        { nombre: 'Antirrábica', fecha: '10/05/2026', proxima: '10/05/2027', estado: 'Vigente' },
        { nombre: 'KC (Tos de las perreras)', fecha: '12/11/2025', proxima: '12/11/2026', estado: 'Por Vencer' }
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
      alergias: 'Sensibilidad alimentaria (Granos)',
      historial: [
        {
          id: 'DES-2026-08',
          fecha: '02/08/2026',
          tipo: 'Control Parasitológico',
          veterinario: 'Dra. Camila Rojas (MV Reg. 5120)',
          diagnostico: 'Control de peso habitual.',
          indicaciones: 'Administración de antiparasitario interno y externo.'
        }
      ],
      vacunas: [
        { nombre: 'Triple Felina', fecha: '15/01/2026', proxima: '15/01/2027', estado: 'Vigente' },
        { nombre: 'Leucemia Felina', fecha: '15/01/2026', proxima: '15/01/2027', estado: 'Vigente' }
      ]
    }
  };

  const paciente = pacientes[pacienteSeleccionado];

  return (
    <div style={{ maxWidth: '1100px', margin: '2.5rem auto', padding: '0 1.5rem' }}>
      
      {/* Selector de Pacientes */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0f172a' }}>Expediente Clínico Digital</h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Historial médico e inmunológico registrado en sistema.</p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {Object.keys(pacientes).map((key) => (
            <button
              key={key}
              onClick={() => setPacienteSeleccionado(key)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: pacienteSeleccionado === key ? '#1e3a8a' : '#cbd5e1',
                backgroundColor: pacienteSeleccionado === key ? '#1e3a8a' : '#ffffff',
                color: pacienteSeleccionado === key ? '#ffffff' : '#475569',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Ficha: {pacientes[key].nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Resumen del Paciente (Ficha Resumen) */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1.2rem'
      }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Paciente</span>
          <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{paciente.nombre}</p>
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Especie / Raza</span>
          <p style={{ color: '#334155', fontWeight: 500 }}>{paciente.especie} — {paciente.raza}</p>
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Edad / Peso</span>
          <p style={{ color: '#334155', fontWeight: 500 }}>{paciente.edad} | {paciente.peso}</p>
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Identificador Microchip</span>
          <p style={{ fontFamily: 'monospace', color: '#1e3a8a', fontWeight: 600 }}>{paciente.chip}</p>
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Observaciones / Alergias</span>
          <p style={{ color: '#dc2626', fontWeight: 500, fontSize: '0.88rem' }}>{paciente.alergias}</p>
        </div>
      </div>

      {/* Historial de Atención */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
          Atenciones Médicas Recientes
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {paciente.historial.map((atencion) => (
            <div key={atencion.id} style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #1e3a8a',
              borderRadius: '6px',
              padding: '1.25rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 700, color: '#1e3a8a' }}>{atencion.tipo} ({atencion.id})</span>
                <span style={{ color: '#64748b' }}>Fecha: {atencion.fecha}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.6rem' }}>
                Profesional a cargo: <strong style={{ color: '#334155' }}>{atencion.veterinario}</strong>
              </p>
              <div style={{ fontSize: '0.9rem', color: '#1e293b', marginBottom: '0.5rem' }}>
                <strong>Diagnóstico / Evaluación:</strong> {atencion.diagnostico}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#334155', backgroundColor: '#f8fafc', padding: '0.6rem 0.8rem', borderRadius: '4px', border: '1px solid #f1f5f9' }}>
                <strong>Indicaciones / Receta:</strong> {atencion.indicaciones}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registro de Inmunizaciones (Tabla) */}
      <div>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
          Esquema de Vacunación
        </h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', textAlign: 'left', color: '#475569', fontSize: '0.8rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '0.75rem 1rem' }}>Vacuna / Inmunización</th>
              <th style={{ padding: '0.75rem 1rem' }}>Fecha Administración</th>
              <th style={{ padding: '0.75rem 1rem' }}>Próximo Refuerzo</th>
              <th style={{ padding: '0.75rem 1rem' }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {paciente.vacunas.map((vacuna, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#0f172a' }}>{vacuna.nombre}</td>
                <td style={{ padding: '0.75rem 1rem', color: '#475569' }}>{vacuna.fecha}</td>
                <td style={{ padding: '0.75rem 1rem', color: '#475569' }}>{vacuna.proxima}</td>
                <td style={{ padding: '0.75rem 1rem' }}>
                  <span style={{
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    backgroundColor: vacuna.estado === 'Vigente' ? '#f0fdf4' : '#fefce8',
                    color: vacuna.estado === 'Vigente' ? '#166534' : '#854d0e',
                    border: `1px solid ${vacuna.estado === 'Vigente' ? '#bbf7d0' : '#fef08a'}`
                  }}>
                    {vacuna.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default FichaClinica;