import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Citas from './pages/Citas';
import MisMascotas from './pages/MisMascotas';
import FichaClinica from './pages/FichaClinica';

import AdminUsuarios from './pages/AdminUsuarios';
import RegistroVacunas from './pages/RegistroVacunas';
import AdminReportes from './pages/AdminReportes';

// Componente para proteger rutas privadas
function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de sesión

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const themeStyles = {
    backgroundColor: darkMode ? '#0b1329' : '#f8fafc',
    color: darkMode ? '#f8fafc' : '#0f172a',
    minHeight: '100vh',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };

  return (
    <div style={themeStyles}>
      <Router>
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/nosotros" element={<Nosotros darkMode={darkMode} />} />
            <Route path="/servicios" element={<Servicios darkMode={darkMode} />} />
            <Route path="/contacto" element={<Contacto darkMode={darkMode} />} />
            
            {/* Página de Login le pasa la función para activar sesión */}
            <Route path="/login" element={<Login darkMode={darkMode} setIsLoggedIn={setIsLoggedIn} />} />
            
            <Route path="/citas" element={<Citas darkMode={darkMode} />} />

            {/* RUTA PROTEGIDA: Solo accesible si isLoggedIn es true */}
            <Route 
              path="/mascotas" 
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <MisMascotas darkMode={darkMode} />
                </ProtectedRoute>
              } 
            />

            <Route path="/ficha" element={<FichaClinica darkMode={darkMode} />} />
            <Route path="/admin/usuarios" element={<AdminUsuarios darkMode={darkMode} />} />
            <Route path="/tecnico/vacunas" element={<RegistroVacunas darkMode={darkMode} />} />
            <Route path="/admin/reportes" element={<AdminReportes darkMode={darkMode} />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}