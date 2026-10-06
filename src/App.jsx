import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Citas from './pages/Citas';
import FichaClinica from './pages/FichaClinica';
import MisMascotas from './pages/MisMascotas';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/ficha-clinica" element={<FichaClinica />} />
        <Route path="/mis-mascotas" element={<MisMascotas />} />
      </Routes>
    </Router>
  );
}

export default App;