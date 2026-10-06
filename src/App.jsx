import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importación de componentes
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Citas from './pages/Citas';
import MisMascotas from './pages/MisMascotas';
import FichaClinica from './pages/FichaClinica';

function App() {
  // Simulación de sesión (cambiar a true para ver Mis Mascotas y Ficha Clínica)
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(true);

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#181513', minHeight: '100vh', color: '#e5e7eb' }}>
        <Navbar 
          usuarioAutenticado={usuarioAutenticado} 
          setUsuarioAutenticado={setUsuarioAutenticado} 
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUsuarioAutenticado={setUsuarioAutenticado} />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/mismascotas" element={<MisMascotas />} />
          <Route path="/fichaclinica" element={<FichaClinica />} />
          {/* Ruta por si escriben cualquier otra dirección */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;