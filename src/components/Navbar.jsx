import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ usuarioAutenticado, setUsuarioAutenticado, modoOscuro, toggleModoOscuro }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    if (setUsuarioAutenticado) setUsuarioAutenticado(false);
    navigate('/');
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8rem 2rem',
      backgroundColor: modoOscuro ? '#1e293b' : '#1e3a8a',
      color: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'background-color 0.3s ease'
    }}>
      <div style={{ fontWeight: 700, fontSize: '1.2rem' }}>
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
          VetSM
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/nosotros" style={{ color: '#ffffff', textDecoration: 'none' }}>Nosotros</Link>

        {usuarioAutenticado && (
          <>
            <Link to="/mismascotas" style={{ color: '#ffffff', textDecoration: 'none' }}>Mis Mascotas</Link>
            <Link to="/citas" style={{ color: '#ffffff', textDecoration: 'none' }}>Agendar Cita</Link>
          </>
        )}

        {/* Botón de Conmutación de Modo Oscuro */}
        <button
          onClick={toggleModoOscuro}
          title="Cambiar Modo Oscuro / Claro"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#ffffff',
            padding: '0.35rem 0.6rem',
            borderRadius: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '1rem'
          }}
        >
          {modoOscuro ? '☀️' : '🌙'}
        </button>

        {usuarioAutenticado ? (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#dc2626',
              color: '#ffffff',
              border: 'none',
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Cerrar Sesión
          </button>
        ) : (
          <Link
            to="/login"
            style={{
              backgroundColor: '#ffffff',
              color: '#1e3a8a',
              padding: '0.4rem 0.9rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Iniciar Sesión
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;