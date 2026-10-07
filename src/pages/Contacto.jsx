import React, { useState } from 'react';

const Contacto = ({ modoOscuro }) => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });

  // Estilos dinámicos
  const cardBg = modoOscuro ? '#1e293b' : '#ffffff';
  const cardBorder = modoOscuro ? '#334155' : '#e2e8f0';
  const titleColor = modoOscuro ? '#f8fafc' : '#0f172a';
  const textColor = modoOscuro ? '#cbd5e1' : '#64748b';
  const labelColor = modoOscuro ? '#94a3b8' : '#475569';
  const inputBg = modoOscuro ? '#0f172a' : '#ffffff';
  const inputBorder = modoOscuro ? '#475569' : '#cbd5e1';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }
    setMensajeEnviado(true);
  };

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: titleColor, marginBottom: '0.5rem' }}>
          Contáctanos
        </h1>
        <p style={{ color: textColor, fontSize: '1rem' }}>
          Estamos aquí para atender tus dudas, consultas o emergencias médicas.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {/* Información de Contacto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ backgroundColor: cardBg, borderRadius: '12px', padding: '1.5rem', border: `1px solid ${cardBorder}` }}>
            <h3 style={{ color: titleColor, margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>📍 Ubicación</h3>
            <p style={{ color: textColor, margin: 0, fontSize: '0.9rem' }}>Av. Providencia 1234, Santiago, Chile</p>
          </div>

          <div style={{ backgroundColor: cardBg, borderRadius: '12px', padding: '1.5rem', border: `1px solid ${cardBorder}` }}>
            <h3 style={{ color: titleColor, margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>📞 Teléfono & Urgencias</h3>
            <p style={{ color: textColor, margin: 0, fontSize: '0.9rem' }}>+56 9 1234 5678 / (2) 2345 6789</p>
          </div>

          <div style={{ backgroundColor: cardBg, borderRadius: '12px', padding: '1.5rem', border: `1px solid ${cardBorder}` }}>
            <h3 style={{ color: titleColor, margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>✉️ Correo Electrónico</h3>
            <p style={{ color: textColor, margin: 0, fontSize: '0.9rem' }}>contacto@vetsm.cl</p>
          </div>

          <div style={{ backgroundColor: cardBg, borderRadius: '12px', padding: '1.5rem', border: `1px solid ${cardBorder}` }}>
            <h3 style={{ color: titleColor, margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>⏰ Horario de Atención</h3>
            <p style={{ color: textColor, margin: 0, fontSize: '0.9rem' }}>Lunes a Viernes: 08:30 - 20:00 hrs</p>
            <p style={{ color: textColor, margin: '0.25rem 0 0', fontSize: '0.9rem' }}>Sábados y Domingos: 09:00 - 18:00 hrs (Urgencias 24/7)</p>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div style={{
          backgroundColor: cardBg,
          borderRadius: '16px',
          padding: '2rem',
          border: `1px solid ${cardBorder}`
        }}>
          {mensajeEnviado ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <span style={{ fontSize: '3rem' }}>📩</span>
              <h3 style={{ color: titleColor, marginTop: '1rem' }}>¡Mensaje Enviado!</h3>
              <p style={{ color: textColor, fontSize: '0.9rem' }}>Gracias por contactarnos. Te responderemos a la brevedad.</p>
              <button
                onClick={() => { setMensajeEnviado(false); setForm({ nombre: '', email: '', asunto: '', mensaje: '' }); }}
                style={{
                  backgroundColor: '#1e3a8a',
                  color: '#fff',
                  border: 'none',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginTop: '1rem'
                }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: labelColor, marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '8px',
                    border: `1px solid ${inputBorder}`,
                    backgroundColor: inputBg,
                    color: titleColor,
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: labelColor, marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '8px',
                    border: `1px solid ${inputBorder}`,
                    backgroundColor: inputBg,
                    color: titleColor,
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: labelColor, marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                  Asunto
                </label>
                <input
                  type="text"
                  placeholder="Consulta general / Presupuesto"
                  value={form.asunto}
                  onChange={(e) => setForm({ ...form, asunto: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '8px',
                    border: `1px solid ${inputBorder}`,
                    backgroundColor: inputBg,
                    color: titleColor,
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: labelColor, marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                  Mensaje *
                </label>
                <textarea
                  rows="4"
                  placeholder="Escribe tu mensaje o consulta..."
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '8px',
                    border: `1px solid ${inputBorder}`,
                    backgroundColor: inputBg,
                    color: titleColor,
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#1e3a8a',
                  color: '#ffffff',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  marginTop: '0.5rem'
                }}
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacto;