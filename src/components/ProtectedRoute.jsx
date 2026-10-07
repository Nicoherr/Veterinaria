import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Verificamos si existe usuario o token guardado
  const usuario = localStorage.getItem('usuario');
  const token = localStorage.getItem('token');

  // Si existe cualquiera de los dos, permitimos el acceso
  if (usuario || token) {
    return <Outlet />;
  }

  // Si no está autenticado, redirige al login
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;