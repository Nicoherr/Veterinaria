import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ modoOscuro, toggleModoOscuro }) => {
  const navigate = useNavigate();
  const usuario = localStorage.getItem('usuario');

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    navigate('/');
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8rem 2rem',
      backgroundColor: modoOscuro ? '#0f172a' : '#ffffff',
      borderBottom: `1px solid ${modoOscuro ? '#1e293b' : '#e2e8f0'}`,
      transition: 'background-color 0.3s ease'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: modoOscuro ? '#ffffff' : '#0f172a', fontWeight: 800, fontSize: '1.25rem' }}>
        VetSM
      </Link>

      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: modoOscuro ? '#cbd5e1' : '#475569', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Inicio</Link>
        <Link to="/nosotros" style={{ color: modoOscuro ? '#cbd5e1' : '#475569', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Nosotros</Link>
        <Link to="/servicios" style={{ color: modoOscuro ? '#cbd5e1' : '#475569', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Servicios</Link>
        <Link to="/contacto" style={{ color: modoOscuro ? '#cbd5e1' : '#475569', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Contacto</Link>
        
        {usuario && (
          <>
            <Link to="/mismascotas" style={{ color: modoOscuro ? '#cbd5e1' : '#475569', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Mis Mascotas</Link>
            <Link to="/citas" style={{ color: modoOscuro ? '#cbd5e1' : '#475569', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Agendar Cita</Link>
          </>
        )}

        <button
          onClick={toggleModoOscuro}
          style={{
            background: modoOscuro ? '#1e293b' : '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem'
          }}
        >
          {modoOscuro ? '☀️' : '🌙'}
        </button>

        {usuario ? (
          <button onClick={handleLogout} style={{ backgroundColor: '#dc2626', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer' }}>
            Cerrar Sesión
          </button>
        ) : (
          <Link to="/login" style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>
            Iniciar Sesión
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;