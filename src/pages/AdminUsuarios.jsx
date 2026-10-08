import React, { useState } from 'react';

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Ana Gómez', email: 'ana@vetsm.cl', rol: 'Recepcionista', activo: true },
    { id: 2, nombre: 'Dr. Carlos Silva', email: 'csilva@vetsm.cl', rol: 'Veterinario', activo: true },
    { id: 3, nombre: 'Laura Riquelme', email: 'laura@vetsm.cl', rol: 'Tecnico', activo: true },
    { id: 4, nombre: 'Juan Pérez', email: 'juan.perez@email.com', rol: 'Duenio', activo: true }
  ]);

  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoEmail, setNuevoEmail] = useState('');
  const [nuevoRol, setNuevoRol] = useState('Duenio');

  const handleAgregarUsuario = (e) => {
    e.preventDefault();
    if (!nuevoNombre || !nuevoEmail) return;
    const nuevo = {
      id: usuarios.length + 1,
      nombre: nuevoNombre,
      email: nuevoEmail,
      rol: nuevoRol,
      activo: true
    };
    setUsuarios([...usuarios, nuevo]);
    setNuevoNombre('');
    setNuevoEmail('');
  };

  const toggleEstado = (id) => {
    setUsuarios(usuarios.map(u => u.id === id ? { ...u, activo: !u.activo } : u));
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '2rem auto', padding: '1rem', color: '#f8fafc' }}>
      <h2 style={{ fontSize: '1.8rem', color: '#38bdf8', marginBottom: '1.5rem' }}>
        ⚙️ Gestión de Usuarios y Roles (Administración)
      </h2>

      {/* Formulario Crear Usuario */}
      <form onSubmit={handleAgregarUsuario} style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Nombre Completo</label>
          <input 
            type="text" 
            value={nuevoNombre} 
            onChange={(e) => setNuevoNombre(e.target.value)} 
            placeholder="Ej: María López" 
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }} 
            required 
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Correo Electrónico</label>
          <input 
            type="email" 
            value={nuevoEmail} 
            onChange={(e) => setNuevoEmail(e.target.value)} 
            placeholder="correo@ejemplo.com" 
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }} 
            required 
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Rol asignado</label>
          <select 
            value={nuevoRol} 
            onChange={(e) => setNuevoRol(e.target.value)}
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
          >
            <option value="Administrador">Administrador</option>
            <option value="Recepcionista">Recepcionista / Operador</option>
            <option value="Veterinario">Médico Veterinario</option>
            <option value="Tecnico">Técnico Veterinario</option>
            <option value="Duenio">Dueño de Mascota</option>
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button type="submit" style={{ width: '100%', backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '0.65rem', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
            + Registrar Usuario
          </button>
        </div>
      </form>

      {/* Tabla de Usuarios */}
      <div style={{ background: '#1e293b', borderRadius: '12px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#0f172a', color: '#94a3b8', fontSize: '0.85rem' }}>
              <th style={{ padding: '1rem' }}>ID</th>
              <th style={{ padding: '1rem' }}>Nombre</th>
              <th style={{ padding: '1rem' }}>Email</th>
              <th style={{ padding: '1rem' }}>Rol</th>
              <th style={{ padding: '1rem' }}>Estado</th>
              <th style={{ padding: '1rem' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(u => (
              <tr key={u.id} style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '1rem' }}>#{u.id}</td>
                <td style={{ padding: '1rem', fontWeight: '600' }}>{u.nombre}</td>
                <td style={{ padding: '1rem', color: '#cbd5e1' }}>{u.email}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ backgroundColor: '#334155', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                    {u.rol}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ color: u.activo ? '#4ade80' : '#f87171', fontWeight: '600' }}>
                    {u.activo ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <button 
                    onClick={() => toggleEstado(u.id)}
                    style={{ background: u.activo ? '#991b1b' : '#166534', color: '#fff', border: 'none', padding: '0.3rem 0.7rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    {u.activo ? 'Desactivar' : 'Activar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}