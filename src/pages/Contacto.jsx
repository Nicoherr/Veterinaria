import React, { useState } from 'react';

export default function Contacto({ darkMode }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Estilos adaptables según el tema
  const textColor = darkMode ? '#f8fafc' : '#0f172a';
  const subTextColor = darkMode ? '#cbd5e1' : '#475569';
  const cardBg = darkMode ? '#1e293b' : '#ffffff';
  const inputBg = darkMode ? '#0f172a' : '#f8fafc';
  const borderColor = darkMode ? '#334155' : '#cbd5e1';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Limpia el error del campo a medida que el usuario escribe
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Función de validación campo por campo
  const validateForm = () => {
    const newErrors = {};

    // 1. Validar Nombre (solo letras y espacios)
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre completo es obligatorio.';
    } else if (!nameRegex.test(formData.nombre.trim())) {
      newErrors.nombre = 'El nombre solo debe contener letras (no números ni caracteres especiales).';
    }

    // 2. Validar Correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Ingresa un correo electrónico válido (ej: usuario@ejemplo.cl).';
    }

    // 3. Validar Teléfono (solo números, entre 8 y 11 dígitos)
    const phoneRegex = /^[0-9]{8,11}$/;
    const cleanPhone = formData.telefono.replace(/\s+/g, '').replace(/^\+56/, '');
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono de contacto es obligatorio.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.telefono = 'Ingresa un teléfono válido de 9 dígitos (ej: 912345678).';
    }

    // 4. Validar Asunto
    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es obligatorio.';
    } else if (formData.asunto.trim().length < 4) {
      newErrors.asunto = 'El asunto debe tener al menos 4 caracteres.';
    }

    // 5. Validar Mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje no puede estar vacío.';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe ser más descriptivo (al menos 10 caracteres).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
      setErrors({});
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2.2rem', textAlign: 'center', color: '#38bdf8', marginBottom: '0.8rem', fontWeight: 'bold' }}>
        Contáctanos
      </h1>
      <p style={{ textAlign: 'center', color: subTextColor, marginBottom: '2.5rem' }}>
        ¿Tienes dudas sobre la atención o necesitas agendar una consulta especial? Escríbenos y responderemos a la brevedad.
      </p>

      {/* Alerta de éxito */}
      {submitted && (
        <div style={{
          backgroundColor: '#059669',
          color: '#ffffff',
          padding: '1rem 1.5rem',
          borderRadius: '12px',
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      <div style={{
        backgroundColor: cardBg,
        border: `1px solid ${borderColor}`,
        padding: '2.5rem',
        borderRadius: '16px',
        boxShadow: darkMode ? '0 10px 25px rgba(0,0,0,0.3)' : '0 10px 25px rgba(0,0,0,0.08)',
        transition: 'background-color 0.3s ease'
      }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          
          {/* Fila 1: Nombre y Teléfono */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem' }}>
            
            {/* Nombre */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: textColor, marginBottom: '0.4rem', fontWeight: '600' }}>
                Nombre Completo *
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Ej. Ana Silva"
                value={formData.nombre}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: `1px solid ${errors.nombre ? '#ef4444' : borderColor}`,
                  backgroundColor: inputBg,
                  color: textColor,
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {errors.nombre && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem', display: 'block' }}>{errors.nombre}</span>}
            </div>

            {/* Teléfono */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: textColor, marginBottom: '0.4rem', fontWeight: '600' }}>
                Teléfono de Contacto *
              </label>
              <input
                type="tel"
                name="telefono"
                placeholder="Ej. 987654321"
                value={formData.telefono}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: `1px solid ${errors.telefono ? '#ef4444' : borderColor}`,
                  backgroundColor: inputBg,
                  color: textColor,
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {errors.telefono && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem', display: 'block' }}>{errors.telefono}</span>}
            </div>

          </div>

          {/* Fila 2: Correo y Asunto */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem' }}>
            
            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: textColor, marginBottom: '0.4rem', fontWeight: '600' }}>
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                placeholder="correo@ejemplo.cl"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: `1px solid ${errors.email ? '#ef4444' : borderColor}`,
                  backgroundColor: inputBg,
                  color: textColor,
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem', display: 'block' }}>{errors.email}</span>}
            </div>

            {/* Asunto */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: textColor, marginBottom: '0.4rem', fontWeight: '600' }}>
                Asunto *
              </label>
              <input
                type="text"
                name="asunto"
                placeholder="Consulta general / Especialidad"
                value={formData.asunto}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: `1px solid ${errors.asunto ? '#ef4444' : borderColor}`,
                  backgroundColor: inputBg,
                  color: textColor,
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {errors.asunto && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem', display: 'block' }}>{errors.asunto}</span>}
            </div>

          </div>

          {/* Mensaje */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', color: textColor, marginBottom: '0.4rem', fontWeight: '600' }}>
              Mensaje *
            </label>
            <textarea
              name="mensaje"
              rows="4"
              placeholder="Escribe tu consulta aquí..."
              value={formData.mensaje}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: `1px solid ${errors.mensaje ? '#ef4444' : borderColor}`,
                backgroundColor: inputBg,
                color: textColor,
                outline: 'none',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            ></textarea>
            {errors.mensaje && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem', display: 'block' }}>{errors.mensaje}</span>}
          </div>

          {/* Botón Submit */}
          <button
            type="submit"
            style={{
              backgroundColor: '#0284c7',
              color: '#ffffff',
              padding: '0.85rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
              transition: 'background-color 0.2s ease'
            }}
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}