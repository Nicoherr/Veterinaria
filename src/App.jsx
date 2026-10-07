import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login';
import Citas from './pages/Citas';
import MisMascotas from './pages/MisMascotas';

function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(
    () => !!localStorage.getItem('usuario')
  );

  // Estado del Modo Oscuro guardado en localStorage
  const [modoOscuro, setModoOscuro] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleModoOscuro = () => {
    setModoOscuro((prev) => {
      const nuevoModo = !prev;
      localStorage.setItem('theme', nuevoModo ? 'dark' : 'light');
      return nuevoModo;
    });
  };

  const actualizarSesion = (estado) => {
    setUsuarioAutenticado(estado);
  };

  // Estilos globales de fondo e intensidad de texto según el modo
  const themeStyles = {
    backgroundColor: modoOscuro ? '#0f172a' : '#f8fafc',
    color: modoOscuro ? '#f8fafc' : '#0f172a',
    minHeight: '100vh',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };

  return (
    <div style={themeStyles}>
      <Router>
        <Navbar
          usuarioAutenticado={usuarioAutenticado}
          setUsuarioAutenticado={actualizarSesion}
          modoOscuro={modoOscuro}
          toggleModoOscuro={toggleModoOscuro}
        />

        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<Home modoOscuro={modoOscuro} />} />
          <Route path="/home" element={<Home modoOscuro={modoOscuro} />} />
          <Route path="/nosotros" element={<Nosotros modoOscuro={modoOscuro} />} />

          {/* Login */}
          <Route
            path="/login"
            element={
              usuarioAutenticado ? (
                <Navigate to="/mismascotas" replace />
              ) : (
                <Login setUsuarioAutenticado={actualizarSesion} modoOscuro={modoOscuro} />
              )
            }
          />

          {/* Rutas Privadas */}
          <Route
            path="/mismascotas"
            element={
              usuarioAutenticado ? (
                <MisMascotas modoOscuro={modoOscuro} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/citas"
            element={
              usuarioAutenticado ? (
                <Citas modoOscuro={modoOscuro} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;