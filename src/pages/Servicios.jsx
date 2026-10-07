import React from 'react';

const Servicios = ({ modoOscuro }) => {
  const listaServicios = [
    {
      icono: '🩺',
      titulo: 'Consulta Médica General',
      descripcion: 'Evaluaciones de rutina, diagnóstico temprano y atención médica preventiva para todo tipo de mascotas.'
    },
    {
      icono: '💉',
      titulo: 'Vacunación y Desparasitación',
      descripcion: 'Esquemas completos de inmunización y control de parásitos internos y externos con carnet al día.'
    },
    {
      icono: '✂️',
      titulo: 'Cirugía General y Especializada',
      descripcion: 'Pabellón quirúrgico equipado, esterilizaciones y procedimientos de complejidad con anestesia inhalatoria.'
    },
    {
      icono: '🧪',
      titulo: 'Laboratorio Clínico',
      descripcion: 'Exámenes de sangre, orina, microbiología y perfiles bioquímicos con resultados en tiempo récord.'
    },
    {
      icono: '🩻',
      titulo: 'Imagenología y Ecografía',
      descripcion: 'Radiografía digital y ecografía abdominal para un diagnóstico preciso y no invasivo.'
    },
    {
      icono: '🦷',
      titulo: 'Odontología Veterinaria',
      descripcion: 'Limpieza ultrasonica de dientes, destartraje, extracciones y cuidado bucal integral.'
    },
    {
      icono: '🚑',
      titulo: 'Urgencias 24/7',
      descripcion: 'Atención médica inmediata y hospitalización con monitoreo constante para casos críticos.'
    },
    {
      icono: '🛁',
      titulo: 'Peluvet y Estética',
      descripcion: 'Bañoterapia médica, cortes de raza, corte de uñas y cuidado dermatológico especializado.'
    }
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 1.5rem',
      transition: 'all 0.3s ease'
    }}>
      {/* Encabezado */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{
          fontSize: '2.25rem',
          fontWeight: '800',
          marginBottom: '0.75rem',
          color: modoOscuro ? '#38bdf8' : '#0284c7'
        }}>
          Nuestros Servicios Médicos
        </h1>
        <p style={{
          fontSize: '1.1rem',
          maxWidth: '650px',
          margin: '0 auto',
          color: modoOscuro ? '#94a3b8' : '#64748b'
        }}>
          En VetSM brindamos atención veterinaria integral apoyada en tecnología médica moderna y un equipo apasionado por la salud de tu mascota.
        </p>
      </div>

      {/* Rejilla de Servicios */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem'
      }}>
        {listaServicios.map((serv, index) => (
          <div
            key={index}
            style={{
              backgroundColor: modoOscuro ? '#0f172a' : '#ffffff',
              border: `1px solid ${modoOscuro ? '#1e293b' : '#e2e8f0'}`,
              borderRadius: '12px',
              padding: '1.75rem',
              boxShadow: modoOscuro 
                ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' 
                : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              {serv.icono}
            </div>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '0.5rem',
              color: modoOscuro ? '#f8fafc' : '#0f172a'
            }}>
              {serv.titulo}
            </h3>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: '1.5',
              color: modoOscuro ? '#94a3b8' : '#64748b'
            }}>
              {serv.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;