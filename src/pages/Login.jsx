import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ darkMode, setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Estilos adaptables según el tema
  const cardBg = darkMode ? '#1e293b' : '#ffffff';
  const textColor = darkMode ? '#f8fafc' : '#0f172a';
  const subTextColor = darkMode ? '#94a3b8' : '#64748b';
  const inputBg = darkMode ? '#0f172a' : '#f8fafc';
  const borderColor = darkMode ? '#334155' : '#cbd5e1';
  const socialBtnBg = darkMode ? '#0f172a' : '#ffffff';

  const handleSocialLogin = (provider) => {
    // Simulación de inicio de sesión con proveedor social
    setIsLoggedIn(true);
    navigate('/mascotas');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      setIsLoggedIn(true);
      navigate('/mascotas');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 120px)',
      padding: '2rem 1rem'
    }}>
      <div style={{
        backgroundColor: cardBg,
        border: `1px solid ${borderColor}`,
        borderRadius: '16px',
        padding: '2.5rem',
        width: '100%',
        maxWidth: '420px',
        boxShadow: darkMode ? '0 10px 25px rgba(0,0,0,0.5)' : '0 10px 25px rgba(0,0,0,0.08)',
        transition: 'background-color 0.3s ease'
      }}>
        
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🐾</div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: textColor, margin: 0 }}>
            Iniciar Sesión
          </h2>
          <p style={{ color: subTextColor, fontSize: '0.9rem', marginTop: '0.4rem' }}>
            Ingresa a tu cuenta para gestionar tus mascotas
          </p>
        </div>

        {/* BOTONES SOCIALES (Google y Apple/iCloud) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          
          {/* Google */}
          <button
            type="button"
            onClick={() => handleSocialLogin('Google')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '0.7rem',
              borderRadius: '8px',
              border: `1px solid ${borderColor}`,
              backgroundColor: socialBtnBg,
              color: textColor,
              fontWeight: '600',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.26v3.15C3.23 21.28 7.31 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.26C.46 8.21 0 10.05 0 12s.46 3.79 1.26 5.39l4.02-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.23 2.72 1.26 6.61l4.02 3.15c.95-2.85 3.6-4.96 6.72-4.96z"/>
            </svg>
            Continuar con Google
          </button>

          {/* Apple / iCloud */}
          <button
            type="button"
            onClick={() => handleSocialLogin('Apple')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '0.7rem',
              borderRadius: '8px',
              border: `1px solid ${borderColor}`,
              backgroundColor: socialBtnBg,
              color: textColor,
              fontWeight: '600',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={darkMode ? '#ffffff' : '#000000'}>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.46-.62.72-1.16 1.88-1.01 3 .1.01 2.19-.53 2.88-1.36z"/>
            </svg>
            Continuar con Apple / iCloud
          </button>

        </div>

        {/* Divisor "O" */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: borderColor }}></div>
          <span style={{ fontSize: '0.8rem', color: subTextColor, textTransform: 'uppercase' }}>O con tu email</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: borderColor }}></div>
        </div>

        {/* Formulario Tradicional */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: textColor, marginBottom: '0.4rem' }}>
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              placeholder="correo@ejemplo.cl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: `1px solid ${borderColor}`,
                backgroundColor: inputBg,
                color: textColor,
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: textColor, marginBottom: '0.4rem' }}>
              Contraseña
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: `1px solid ${borderColor}`,
                backgroundColor: inputBg,
                color: textColor,
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: '0.5rem',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              padding: '0.85rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            Ingresar
          </button>
        </form>

        {/* Pié */}
        <div style={{ marginTop: '1.8rem', textAlign: 'center', fontSize: '0.85rem', color: subTextColor }}>
          ¿Aún no tienes una cuenta?{' '}
          <span style={{ color: '#38bdf8', fontWeight: '600', cursor: 'pointer' }}>
            Regístrate aquí
          </span>
        </div>

      </div>
    </div>
  );
}