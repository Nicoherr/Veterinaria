import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Citas from './pages/Citas';
import Login from './pages/Login';
import MisMascotas from './pages/MisMascotas';
import FichaClinica from './pages/FichaClinica';

export default function App() {
  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem('modoOscuro');
    return guardado !== null ? JSON.parse(guardado) : true;
  });

  useEffect(() => {
    localStorage.setItem('modoOscuro', JSON.stringify(modoOscuro));
    document.body.style.backgroundColor = modoOscuro ? '#0b1329' : '#f8fafc';
    document.body.style.color = modoOscuro ? '#f8fafc' : '#0f172a';
    document.body.style.margin = '0';
  }, [modoOscuro]);

  const toggleModoOscuro = () => setModoOscuro(!modoOscuro);

  return (
    <Router>
      {/* Contenedor principal con el color de fondo dinámico */}
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: modoOscuro ? '#0b1329' : '#f8fafc',
        color: modoOscuro ? '#f8fafc' : '#0f172a',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        <Navbar modoOscuro={modoOscuro} toggleModoOscuro={toggleModoOscuro} />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home modoOscuro={modoOscuro} />} />
            <Route path="/nosotros" element={<Nosotros modoOscuro={modoOscuro} />} />
            <Route path="/servicios" element={<Servicios modoOscuro={modoOscuro} />} />
            <Route path="/contacto" element={<Contacto modoOscuro={modoOscuro} />} />
            <Route path="/login" element={<Login modoOscuro={modoOscuro} />} />
            <Route path="/citas" element={
              <ProtectedRoute>
                <Citas modoOscuro={modoOscuro} />
              </ProtectedRoute>
            } />
            <Route path="/mismascotas" element={
              <ProtectedRoute>
                <MisMascotas modoOscuro={modoOscuro} />
              </ProtectedRoute>
            } />
            <Route path="/fichaclinica" element={
              <ProtectedRoute>
                <FichaClinica modoOscuro={modoOscuro} />
              </ProtectedRoute>
            } />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer style={{
          backgroundColor: modoOscuro ? '#0f172a' : '#f1f5f9',
          color: modoOscuro ? '#94a3b8' : '#64748b',
          padding: '1.5rem',
          textAlign: 'center',
          borderTop: `1px solid ${modoOscuro ? '#1e293b' : '#e2e8f0'}`,
          fontSize: '0.85rem'
        }}>
          © {new Date().getFullYear()} VetSM - Centro Médico Veterinario. Todos los derechos reservados.
        </footer>
      </div>
    </Router>
  );
}