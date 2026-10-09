import React, { useState } from 'react';

export default function Contacto({ darkMode }) {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const cardBg = darkMode ? 'bg-dark text-white border-secondary' : 'bg-white text-dark border-light-subtle';
  const inputBg = darkMode ? 'bg-secondary text-white border-secondary' : '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    else if (!nameRegex.test(formData.nombre.trim())) newErrors.nombre = 'Solo se permiten letras.';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'El correo es obligatorio.';
    else if (!emailRegex.test(formData.email.trim())) newErrors.email = 'Correo no válido.';

    const phoneRegex = /^[0-9]{8,11}$/;
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio.';
    else if (!phoneRegex.test(formData.telefono.replace(/\s+/g, ''))) newErrors.telefono = 'Teléfono inválido (mín. 8 dígitos).';

    if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es obligatorio.';
    if (!formData.mensaje.trim() || formData.mensaje.trim().length < 10) newErrors.mensaje = 'Mínimo 10 caracteres.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: '900px' }}>
      <h1 className="text-center text-info fw-bold mb-2">Contáctanos</h1>
      <p className="text-center text-secondary mb-4">
        ¿Tienes dudas sobre la atención o necesitas agendar una consulta especial?
      </p>

      {submitted && (
        <div className="alert alert-success text-center fw-bold mb-4" role="alert">
          ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      <div className={`card shadow p-4 ${cardBg}`}>
        <form onSubmit={handleSubmit} className="row g-3">
          
          <div className="col-md-6">
            <label className="form-label fw-semibold">Nombre Completo *</label>
            <input
              type="text"
              name="nombre"
              className={`form-control ${errors.nombre ? 'is-invalid' : ''} ${inputBg}`}
              placeholder="Ej. Ana Silva"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Teléfono de Contacto *</label>
            <input
              type="tel"
              name="telefono"
              className={`form-control ${errors.telefono ? 'is-invalid' : ''} ${inputBg}`}
              placeholder="Ej. 987654321"
              value={formData.telefono}
              onChange={handleChange}
            />
            {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Correo Electrónico *</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''} ${inputBg}`}
              placeholder="correo@ejemplo.cl"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Asunto *</label>
            <input
              type="text"
              name="asunto"
              className={`form-control ${errors.asunto ? 'is-invalid' : ''} ${inputBg}`}
              placeholder="Consulta general / Especialidad"
              value={formData.asunto}
              onChange={handleChange}
            />
            {errors.asunto && <div className="invalid-feedback">{errors.asunto}</div>}
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold">Mensaje *</label>
            <textarea
              name="mensaje"
              rows="4"
              className={`form-control ${errors.mensaje ? 'is-invalid' : ''} ${inputBg}`}
              placeholder="Escribe tu consulta aquí..."
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
            {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
          </div>

          <div className="col-12 text-end mt-3">
            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
              Enviar Mensaje
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}