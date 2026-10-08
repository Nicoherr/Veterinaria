import React from 'react';

export default function AdminReportes() {
  return (
    <div style={{ maxWidth: '1000px', margin: '2rem auto', padding: '1rem', color: '#f8fafc' }}>
      <h2 style={{ fontSize: '1.8rem', color: '#38bdf8', marginBottom: '1.5rem' }}>
        📊 Reportes Estadísticos y Métricas de Atenciones (VetSM)
      </h2>

      {/* Tarjetas de Resumen */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #38bdf8' }}>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0' }}>Atenciones del Mes</p>
          <h3 style={{ fontSize: '1.8rem', margin: '0.4rem 0 0 0', color: '#fff' }}>142</h3>
        </div>
        <div style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #4ade80' }}>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0' }}>Citas Confirmadas</p>
          <h3 style={{ fontSize: '1.8rem', margin: '0.4rem 0 0 0', color: '#fff' }}>98</h3>
        </div>
        <div style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #facc15' }}>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0' }}>Vacunas Aplicadas</p>
          <h3 style={{ fontSize: '1.8rem', margin: '0.4rem 0 0 0', color: '#fff' }}>54</h3>
        </div>
        <div style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #f87171' }}>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0' }}>Citas Canceladas/Reagendadas</p>
          <h3 style={{ fontSize: '1.8rem', margin: '0.4rem 0 0 0', color: '#fff' }}>12</h3>
        </div>
      </div>

      {/* Tabla Desglose por Servicio */}
      <div style={{ background: '#1e293b', borderRadius: '12px', padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Servicios más Solicitados</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8', fontSize: '0.85rem' }}>
              <th style={{ padding: '0.75rem' }}>Servicio</th>
              <th style={{ padding: '0.75rem' }}>Especie Principal</th>
              <th style={{ padding: '0.75rem' }}>Cantidad de Atenciones</th>
              <th style={{ padding: '0.75rem' }}>Porcentaje del Total</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '0.75rem', fontWeight: '600' }}>Consulta General</td>
              <td style={{ padding: '0.75rem' }}>Canina / Felina</td>
              <td style={{ padding: '0.75rem' }}>65</td>
              <td style={{ padding: '0.75rem', color: '#38bdf8' }}>45.7%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '0.75rem', fontWeight: '600' }}>Vacunación y Desparasitación</td>
              <td style={{ padding: '0.75rem' }}>Canina / Felina</td>
              <td style={{ padding: '0.75rem' }}>54</td>
              <td style={{ padding: '0.75rem', color: '#38bdf8' }}>38.0%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '0.75rem', fontWeight: '600' }}>Procedimiento Quirúrgico</td>
              <td style={{ padding: '0.75rem' }}>Canina</td>
              <td style={{ padding: '0.75rem' }}>15</td>
              <td style={{ padding: '0.75rem', color: '#38bdf8' }}>10.5%</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', fontWeight: '600' }}>Exámenes de Laboratorio</td>
              <td style={{ padding: '0.75rem' }}>Felina</td>
              <td style={{ padding: '0.75rem' }}>8</td>
              <td style={{ padding: '0.75rem', color: '#38bdf8' }}>5.8%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}