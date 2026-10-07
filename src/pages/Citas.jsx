import React, { useState } from 'react';

const Citas = ({ modoOscuro }) => {
  const [formData, setFormData] = useState({
    mascota: '',
    especia: 'Perro',
    veterinario: '',
    fecha: '',
    hora: '',
    motivo: ''
  });

  const [confirmado, setConfirmado] = useState(false);

  // Paleta de colores según el tema
  const cardBg = modoOscuro ? '#1e293b' : '#ffffff';
  const cardBorder = modoOscuro ? '#334155' : '#e2e8f0';
  const titleColor = modoOscuro ? '#f8fafc' : '#0f172a';
  const textColor = modoOscuro ? '#cbd5e1' : '#64748b';
  const labelColor = modoOscuro ? '#94a3b8' : '#475569';
  const inputBg = modoOscuro ? '#0f172a' : '#ffffff';
  const inputBorder = modoOscuro ? '#475569' : '#cbd5e1';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.mascota || !formData.fecha || !formData.hora) {
      alert('Por favor, completa los campos requeridos.');
      return;
    }
    setConfirmado(true);
  };

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: titleColor, marginBottom: '0.5rem' }}>
          Agendar Cita Médica
        </h1>
        <p style={{ color: textColor, fontSize: '0.95rem' }}>
          Selecciona los datos para la atención de tu mascota en nuestro centro.
        </p>
      </div>

      <div style={{
        backgroundColor: cardBg,
        borderRadius: '16px',
        padding: '2rem',
        border: `1px solid ${cardBorder}`,
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}>
        {confirmado ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ color: titleColor, fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              ¡Cita Agendada con Éxito!
            </h2>
            <p style={{ color: textColor, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Hemos registrado la cita para <strong>{formData.mascota}</strong> el día <strong>{formData.fecha}</strong> a las <strong>{formData.hora} hrs</strong>.
            </p>
            <button
              onClick={() => {
                setConfirmado(false);
                setFormData({ mascota: '', especia: 'Perro', veterinario: '', fecha: '', hora: '', motivo: '' });
              }}
              style={{
                backgroundColor: '#1e3a8a',
                color: '#ffffff',
                border: 'none',
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Agendar otra cita
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Nombre Mascota */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: labelColor, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                Nombre de la Mascota *
              </label>
              <input
                type="text"
                name="mascota"
                placeholder="Ej. Max"
                value={formData.mascota}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.8rem',
                  borderRadius: '8px',
                  border: `1px solid ${inputBorder}`,
                  backgroundColor: inputBg,
                  color: titleColor,
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Especie y Especialista */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: labelColor, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Especie
                </label>
                <select
                  name="especia"
                  value={formData.especia}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '8px',
                    border: `1px solid ${inputBorder}`,
                    backgroundColor: inputBg,
                    color: titleColor,
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Exótico">Exótico / Otro</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: labelColor, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Especialista
                </label>
                <select
                  name="veterinario"
                  value={formData.veterinario}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '8px',
                    border: `1px solid ${inputBorder}`,
                    backgroundColor: inputBg,
                    color: titleColor,
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">Cualquier disponible</option>
                  <option value="Dra. Valentina Silva">Dra. Valentina Silva</option>
                  <option value="Dr. Carlos Mendoza">Dr. Carlos Mendoza</option>
                  <option value="Dra. Camila Morales">Dra. Camila Morales</option>
                </select>
              </div>
            </div>

            {/* Fecha y Hora */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: labelColor, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Fecha *
                </label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '8px',
                    border: `1px solid ${inputBorder}`,
                    backgroundColor: inputBg,
                    color: titleColor,
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    colorScheme: modoOscuro ? 'dark' : 'light'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: labelColor, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Hora *
                </label>
                <input
                  type="time"
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '8px',
                    border: `1px solid ${inputBorder}`,
                    backgroundColor: inputBg,
                    color: titleColor,
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    colorScheme: modoOscuro ? 'dark' : 'light'
                  }}
                />
              </div>
            </div>

            {/* Motivo de Consulta */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: labelColor, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                Motivo de Consulta
              </label>
              <textarea
                name="motivo"
                rows="3"
                placeholder="Describe brevemente los síntomas o motivo de la visita..."
                value={formData.motivo}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.8rem',
                  borderRadius: '8px',
                  border: `1px solid ${inputBorder}`,
                  backgroundColor: inputBg,
                  color: titleColor,
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#1e3a8a',
                color: '#ffffff',
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                marginTop: '0.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Confirmar Reserva
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Citas;