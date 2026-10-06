import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('usuario_vetsm'));
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('vetsm_theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('vetsm_theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('vetsm_theme', 'light');
    }
  }, [isDarkMode]);

  const handleLogout = () => {
    localStorage.removeItem('usuario_vetsm');
    navigate('/login');
  };

  return (
    <header style={{
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      borderBottom: isDarkMode ? '1px solid #333333' : '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'background-color 0.3s ease, border-color 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.9rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* LOGO */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          textDecoration: 'none',
          color: '#c68b59',
          fontWeight: 800,
          fontSize: '1.25rem',
          whiteSpace: 'nowrap'
        }}>
          <span style={{ fontSize: '1.4rem' }}>🐾</span>
          <span>VetSM San Marcos</span>
        </Link>

        {/* NAVEGACIÓN Y BOTONES */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.8rem'
        }}>
          <Link to="/" style={{ ...getLinkStyle(isDarkMode) }}>Inicio</Link>
          <Link to="/nosotros" style={{ ...getLinkStyle(isDarkMode) }}>Nosotros</Link>
          <Link to="/citas" style={{ ...getLinkStyle(isDarkMode) }}>Agendar Cita</Link>

          {user?.rol === 'dueno' && (
            <Link to="/mis-mascotas" style={{ ...getLinkStyle(isDarkMode) }}>Mis Mascotas</Link>
          )}

          {user?.rol === 'recepcionista' && (
            <Link to="/ficha-clinica" style={{ ...getLinkStyle(isDarkMode) }}>Registrar Paciente</Link>
          )}

          {user?.rol === 'veterinario' && (
            <Link to="/ficha-clinica" style={{ ...getLinkStyle(isDarkMode) }}>Fichas Clínicas</Link>
          )}

          {/* BOTÓN MODO OSCURO */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            style={{
              background: 'transparent',
              border: isDarkMode ? '1px solid #444444' : '1px solid #d1d5db',
              color: isDarkMode ? '#f3f4f6' : '#374151',
              padding: '0.45rem 0.85rem',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            {isDarkMode ? '☀ Claro' : '🌙 Oscuro'}
          </button>

          {/* BOTÓN SESIÓN */}
          {user ? (
            <button 
              onClick={handleLogout} 
              style={{
                backgroundColor: '#d97706',
                color: '#ffffff',
                border: 'none',
                padding: '0.55rem 1.2rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Cerrar Sesión ({user.nombre})
            </button>
          ) : (
            <Link 
              to="/login" 
              style={{
                backgroundColor: '#c68b59',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.55rem 1.3rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(198, 139, 89, 0.3)'
              }}
            >
              Iniciar Sesión
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

// Función para ajustar color de texto dinámicamente
const getLinkStyle = (isDark) => ({
  textDecoration: 'none',
  color: isDark ? '#e5e7eb' : '#374151',
  fontWeight: 600,
  fontSize: '0.95rem',
  whiteSpace: 'nowrap'
});

export default Navbar;