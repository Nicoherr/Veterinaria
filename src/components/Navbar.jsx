import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ darkMode, toggleDarkMode, isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top shadow-sm ${darkMode ? 'navbar-dark bg-dark border-bottom border-secondary' : 'navbar-light bg-light border-bottom'}`}>
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          🐾 VetSM
        </Link>

        {/* BOTÓN HAMBURGUESA MOBILE */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarVetSM" 
          aria-controls="navbarVetSM" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ENLACES Y ACCIONES */}
        <div className="collapse navbar-collapse" id="navbarVetSM">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link fw-bold text-info" to="/mascotas">
                  🐾 Mis Mascotas
                </Link>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center gap-3">
            {/* Botón Modo Oscuro/Claro */}
            <button
              onClick={toggleDarkMode}
              className={`btn btn-sm rounded-circle ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
              style={{ width: '38px', height: '38px' }}
              title="Alternar Modo Oscuro/Claro"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>

            {/* Sesión */}
            {isLoggedIn ? (
              <button onClick={handleLogout} className="btn btn-danger btn-sm fw-semibold">
                Cerrar Sesión
              </button>
            ) : (
              <Link to="/login" className="btn btn-primary btn-sm fw-semibold">
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}