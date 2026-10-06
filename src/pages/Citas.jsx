import React, { useState } from 'react';

const AgendarCita = () => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [error, setError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Validar que no esté vacío
    if (!nombreMascota.trim()) {
      setError('El nombre de la mascota es obligatorio.');
      return;
    }

    // 2. VALIDACIÓN: Solo permite letras (con tildes/ñ) y espacios. Rechaza números.
    const soloTextoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!soloTextoRegex.test(nombreMascota)) {
      setError('El nombre de la mascota no puede contener números ni caracteres especiales.');
      return;
    }

    if (!fecha || !hora) {
      setError('Debes seleccionar fecha y hora para la cita.');
      return;
    }

    // Si todo está correcto
    setError('');
    setMensajeExito('¡Cita agendada con éxito!');
    setNombreMascota('');
    setFecha('');
    setHora('');
  };

  return (
    <div className="container" style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem' }}>
      <div className="card" style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
          Agendar Cita Médica
        </h2>

        {error && (
          <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '0.8rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        {mensajeExito && (
          <div style={{ backgroundColor: '#dcfce7', color: '#16a34a', padding: '0.8rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {mensajeExito}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
              Nombre de la Mascota
            </label>
            <input
              type="text"
              placeholder="Ej: Basset, Pelusa, Luna"
              value={nombreMascota}
              onChange={(e) => setNombreMascota(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
              Fecha
            </label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
              Hora
            </label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
                outline: 'none'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#c68b59',
              color: '#ffffff',
              border: 'none',
              padding: '0.9rem',
              borderRadius: '8px',
              fontWeight: 700,
              cursor: 'pointer',
              marginTop: '0.5rem'
            }}
          >
            Confirmar Cita
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgendarCita;