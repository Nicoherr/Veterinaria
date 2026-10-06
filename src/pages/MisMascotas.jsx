import React, { useState } from 'react';

const MisMascotas = () => {
  // Lista inicial de mascotas
  const [mascotas, setMascotas] = useState([
    {
      id: 1,
      nombre: 'Max',
      especie: 'Perro',
      raza: 'Golden Retriever',
      edad: '3 años',
      peso: '28.5 kg',
      sexo: 'Macho (Esterilizado)',
      chip: '985141002391029',
      imagen: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      nombre: 'Luna',
      especie: 'Gato',
      raza: 'Siamés',
      edad: '2 años',
      peso: '4.2 kg',
      sexo: 'Hembra (Esterilizada)',
      chip: '985141009988112',
      imagen: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80'
    }
  ]);

  // Estado para controlar la visibilidad del formulario de registro
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Estado para los campos de la nueva mascota
  const [nuevaMascota, setNuevaMascota] = useState({
    nombre: '',
    especie: 'Perro',
    raza: '',
    edad: '',
    peso: '',
    sexo: 'Macho',
    chip: '',
    imagen: ''
  });

  // Manejar cambios en las entradas
  const handleChange = (e) => {
    setNuevaMascota({ ...nuevaMascota, [e.target.name]: e.target.value });
  };

  // Guardar nueva mascota
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevaMascota.nombre || !nuevaMascota.raza) {
      alert('Por favor completa al menos el nombre y la raza.');
      return;
    }

    const nueva = {
      id: Date.now(),
      ...nuevaMascota,
      imagen: nuevaMascota.imagen || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80'
    };

    setMascotas([...mascotas, nueva]);
    setMostrarFormulario(false);
    setNuevaMascota({
      nombre: '',
      especie: 'Perro',
      raza: '',
      edad: '',
      peso: '',
      sexo: 'Macho',
      chip: '',
      imagen: ''
    });
  };

  return (
    <div style={{ color: '#e5e7eb', maxWidth: '1100px', margin: '2rem auto', padding: '0 1rem' }}>
      
      {/* Header y Botón Agregar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '2.5rem'
      }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
            🐾 Mis Mascotas
          </h1>
          <p style={{ color: '#a39e99' }}>
            Gestiona los perfiles de tus mascotas registradas en la clínica.
          </p>
        </div>

        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          style={{
            backgroundColor: '#c68b59',
            color: '#ffffff',
            padding: '0.8rem 1.6rem',
            borderRadius: '12px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '0.95rem',
            boxShadow: '0 6px 20px rgba(198, 139, 89, 0.3)',
            transition: 'transform 0.2s'
          }}
        >
          {mostrarFormulario ? '✕ Cancelar' : '+ Registrar Nueva Mascota'}
        </button>
      </div>

      {/* Formulario de Registro (Desplegable) */}
      {mostrarFormulario && (
        <form onSubmit={handleSubmit} style={{
          backgroundColor: '#24201d',
          border: '1px solid #38332e',
          borderRadius: '20px',
          padding: '2rem',
          marginBottom: '3rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem' }}>
            ➕ Registrar Nueva Mascota
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.2rem',
            marginBottom: '1.5rem'
          }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#a39e99', marginBottom: '0.4rem' }}>
                Nombre *
              </label>
              <input
                type="text"
                name="nombre"
                value={nuevaMascota.nombre}
                onChange={handleChange}
                placeholder="Ej. Buki"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  backgroundColor: '#1c1917',
                  border: '1px solid #38332e',
                  color: '#ffffff',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#a39e99', marginBottom: '0.4rem' }}>
                Especie
              </label>
              <select
                name="especie"
                value={nuevaMascota.especie}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  backgroundColor: '#1c1917',
                  border: '1px solid #38332e',
                  color: '#ffffff',
                  boxSizing: 'border-box'
                }}
              >
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Exótico">Exótico / Otro</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#a39e99', marginBottom: '0.4rem' }}>
                Raza *
              </label>
              <input
                type="text"
                name="raza"
                value={nuevaMascota.raza}
                onChange={handleChange}
                placeholder="Ej. Poodle, Mestizo"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  backgroundColor: '#1c1917',
                  border: '1px solid #38332e',
                  color: '#ffffff',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#a39e99', marginBottom: '0.4rem' }}>
                Edad
              </label>
              <input
                type="text"
                name="edad"
                value={nuevaMascota.edad}
                onChange={handleChange}
                placeholder="Ej. 1 año 6 meses"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  backgroundColor: '#1c1917',
                  border: '1px solid #38332e',
                  color: '#ffffff',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#a39e99', marginBottom: '0.4rem' }}>
                Peso
              </label>
              <input
                type="text"
                name="peso"
                value={nuevaMascota.peso}
                onChange={handleChange}
                placeholder="Ej. 8.5 kg"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  backgroundColor: '#1c1917',
                  border: '1px solid #38332e',
                  color: '#ffffff',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#a39e99', marginBottom: '0.4rem' }}>
                Nº Microchip (Opcional)
              </label>
              <input
                type="text"
                name="chip"
                value={nuevaMascota.chip}
                onChange={handleChange}
                placeholder="Ej. 98514100..."
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  backgroundColor: '#1c1917',
                  border: '1px solid #38332e',
                  color: '#ffffff',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#c68b59',
              color: '#ffffff',
              padding: '0.8rem 2rem',
              borderRadius: '10px',
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Guardar Mascota
          </button>
        </form>
      )}

      {/* Grid de Tarjetas de Mascotas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {mascotas.map((m) => (
          <div key={m.id} style={{
            backgroundColor: '#24201d',
            border: '1px solid #38332e',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ position: 'relative', height: '220px' }}>
              <img
                src={m.imagen}
                alt={m.nombre}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(0,0,0,0.75)',
                color: '#c68b59',
                padding: '0.3rem 0.8rem',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: 700,
                backdropFilter: 'blur(4px)'
              }}>
                {m.especie === 'Perro' ? '🐶 Perro' : m.especie === 'Gato' ? '🐱 Gato' : '🐾 Exótico'}
              </span>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.3rem' }}>
                  {m.nombre}
                </h3>
                <p style={{ color: '#c68b59', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.2rem' }}>
                  {m.raza}
                </p>

                <div style={{
                  backgroundColor: '#1c1917',
                  borderRadius: '12px',
                  padding: '1rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.8rem',
                  fontSize: '0.88rem'
                }}>
                  <div>
                    <span style={{ color: '#a39e99', display: 'block', fontSize: '0.78rem' }}>Edad</span>
                    <strong style={{ color: '#ffffff' }}>{m.edad || 'No especificada'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#a39e99', display: 'block', fontSize: '0.78rem' }}>Peso</span>
                    <strong style={{ color: '#ffffff' }}>{m.peso || 'No registrado'}</strong>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <span style={{ color: '#a39e99', display: 'block', fontSize: '0.78rem' }}>Nº Microchip</span>
                    <code style={{ color: '#c68b59', fontSize: '0.82rem' }}>
                      {m.chip || 'Sin chip registrado'}
                    </code>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.5rem' }}>
                <a
                  href="/fichaclinica"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    backgroundColor: '#38332e',
                    color: '#ffffff',
                    padding: '0.7rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.88rem'
                  }}
                >
                  📋 Ver Ficha
                </a>
                <a
                  href="/citas"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    backgroundColor: '#c68b59',
                    color: '#ffffff',
                    padding: '0.7rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.88rem'
                  }}
                >
                  📅 Agendar Cita
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MisMascotas;