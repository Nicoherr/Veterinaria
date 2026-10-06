import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ usuarioAutenticado, setUsuarioAutenticado }) => {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    // Si estás usando localStorage o un estado global, resetéalo aquí
    if (setUsuarioAutenticado) {
      setUsuarioAutenticado(false);
    }
    localStorage.removeItem('usuario');
    navigate('/login');
  };

  return (
    <nav style={{
      backgroundColor: '#1c1917',
      borderBottom: '1px solid #38332e',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo */}
      <Link to="/" style={{ color: '#c68b59', fontSize: '1.4rem', fontWeight: 800, textDecoration: 'none' }}>
        🐾 Clínica Veterinaria
      </Link>

      {/* Menú de Navegación */}
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#e5e7eb', textDecoration: 'none', fontWeight: 500 }}>
          Inicio
        </Link>
        
        <Link to="/citas" style={{ color: '#e5e7eb', textDecoration: 'none', fontWeight: 500 }}>
          Agendar Cita
        </Link>

        {/* RUTAS PRIVADAS: Solo se muestran si la sesión está iniciada */}
        {usuarioAutenticado ? (
          <>
            <Link to="/mismascotas" style={{ color: '#c68b59', textDecoration: 'none', fontWeight: 600 }}>
              🐾 Mis Mascotas
            </Link>

            <Link to="/fichaclinica" style={{ color: '#c68b59', textDecoration: 'none', fontWeight: 600 }}>
              📋 Ficha Clínica
            </Link>

            <button
              onClick={handleCerrarSesion}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #ef4444',
                color: '#ef4444',
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              Cerrar Sesión
            </button>
          </>
        ) : (
          /* Opciones si NO ha iniciado sesión */
          <>
            <Link to="/login" style={{ color: '#e5e7eb', textDecoration: 'none', fontWeight: 500 }}>
              Iniciar Sesión
            </Link>

            <Link 
              to="/registro" 
              style={{ 
                backgroundColor: '#c68b59', 
                color: '#ffffff', 
                padding: '0.5rem 1rem', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                fontWeight: 600 
              }}
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;