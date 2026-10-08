import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ darkMode, toggleDarkMode, isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const navBg = darkMode ? '#0f172a' : '#ffffff';
  const textColor = darkMode ? '#f8fafc' : '#0f172a';
  const borderColor = darkMode ? '#1e293b' : '#e2e8f0';

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav style={{
      backgroundColor: navBg,
      borderBottom: `1px solid ${borderColor}`,
      padding: '0.85rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'background-color 0.3s ease, border-color 0.3s ease'
    }}>
      {/* LOGO */}
      <Link to="/" style={{ fontSize: '1.4rem', fontWeight: 'bold', color: textColor, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        🐾 VetSM
      </Link>

      {/* ENLACES */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.95rem' }}>
        <Link to="/" style={{ color: textColor, textDecoration: 'none', fontWeight: '500' }}>Inicio</Link>
        <Link to="/nosotros" style={{ color: textColor, textDecoration: 'none', fontWeight: '500' }}>Nosotros</Link>
        <Link to="/servicios" style={{ color: textColor, textDecoration: 'none', fontWeight: '500' }}>Servicios</Link>
        <Link to="/contacto" style={{ color: textColor, textDecoration: 'none', fontWeight: '500' }}>Contacto</Link>
        
        {/* solo visible si hay sesión activa */}
        {isLoggedIn && (
          <Link to="/mascotas" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '600' }}>
            🐾 Mis Mascotas
          </Link>
        )}
      </div>

      {/* ACCIONES */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={toggleDarkMode}
          type="button"
          style={{
            background: darkMode ? '#1e293b' : '#f1f5f9',
            border: `1px solid ${borderColor}`,
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Cambiar Modo Oscuro/Claro"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#ef4444',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.875rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Cerrar Sesión
          </button>
        ) : (
          <Link
            to="/login"
            style={{
              backgroundColor: '#0284c7',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.875rem',
              textDecoration: 'none'
            }}
          >
            Iniciar Sesión
          </Link>
        )}
      </div>
    </nav>
  );
}