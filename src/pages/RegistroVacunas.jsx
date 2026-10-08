import React, { useState } from 'react';

export default function RegistroVacunas() {
  const [registros, setRegistros] = useState([
    { id: 1, paciente: 'Max (Perro)', vacuna: 'Octuple', fecha: '2026-10-01', proxima: '2027-10-01', tecnico: 'Laura Riquelme' },
    { id: 2, paciente: 'Luna (Gato)', vacuna: 'Triple Felina', fecha: '2026-09-15', proxima: '2027-09-15', tecnico: 'Laura Riquelme' }
  ]);

  const [paciente, setPaciente] = useState('');
  const [vacuna, setVacuna] = useState('Antirrábica');
  const [fecha, setFecha] = useState('');
  const [proxima, setProxima] = useState('');

  const handleRegistrar = (e) => {
    e.preventDefault();
    if (!paciente || !fecha) return;
    const nuevo = {
      id: registros.length + 1,
      paciente,
      vacuna,
      fecha,
      proxima,
      tecnico: 'Laura Riquelme (Técnico)'
    };
    setRegistros([nuevo, ...registros]);
    setPaciente('');
    setFecha('');
    setProxima('');
  };

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '1rem', color: '#f8fafc' }}>
      <h2 style={{ fontSize: '1.8rem', color: '#38bdf8', marginBottom: '1.5rem' }}>
        💉 Registro y Control de Vacunación (Técnico Veterinario)
      </h2>

      {/* Formulario de Vacunación */}
      <form onSubmit={handleRegistrar} style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Paciente / Mascota</label>
          <input 
            type="text" 
            value={paciente} 
            onChange={(e) => setPaciente(e.target.value)} 
            placeholder="Ej: Firulais (Perro)" 
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }} 
            required 
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Vacuna Aplicada</label>
          <select 
            value={vacuna} 
            onChange={(e) => setVacuna(e.target.value)}
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
          >
            <option value="Antirrábica">Antirrábica</option>
            <option value="Octúple">Octúple Canina</option>
            <option value="KC (Bordetella)">KC (Traqueobronquitis)</option>
            <option value="Triple Felina">Triple Felina</option>
            <option value="Leucemia Felina">Leucemia Felina</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Fecha de Aplicación</label>
          <input 
            type="date" 
            value={fecha} 
            onChange={(e) => setFecha(e.target.value)} 
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }} 
            required 
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Próxima Dosis</label>
          <input 
            type="date" 
            value={proxima} 
            onChange={(e) => setProxima(e.target.value)} 
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }} 
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <button type="submit" style={{ width: '100%', backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
            Guardar Registro de Vacuna
          </button>
        </div>
      </form>

      {/* Historial de Inmunizaciones */}
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Historial Reciente de Aplicaciones</h3>
      <div style={{ background: '#1e293b', borderRadius: '12px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#0f172a', color: '#94a3b8', fontSize: '0.85rem' }}>
              <th style={{ padding: '1rem' }}>Paciente</th>
              <th style={{ padding: '1rem' }}>Vacuna</th>
              <th style={{ padding: '1rem' }}>Fecha Aplicación</th>
              <th style={{ padding: '1rem' }}>Próxima Dosis</th>
              <th style={{ padding: '1rem' }}>Registrado por</th>
            </tr>
          </thead>
          <tbody>
            {registros.map(r => (
              <tr key={r.id} style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '1rem', fontWeight: '600' }}>{r.paciente}</td>
                <td style={{ padding: '1rem', color: '#38bdf8' }}>{r.vacuna}</td>
                <td style={{ padding: '1rem' }}>{r.fecha}</td>
                <td style={{ padding: '1rem', color: '#facc15' }}>{r.proxima || 'N/A'}</td>
                <td style={{ padding: '1rem', color: '#cbd5e1', fontSize: '0.85rem' }}>{r.tecnico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}