import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUsuarioAutenticado, modoOscuro }) => {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Definición de colores según el modo
  const containerBg = modoOscuro ? '#0f172a' : '#f8fafc';
  const cardBg = modoOscuro ? '#1e293b' : '#ffffff';
  const borderColor = modoOscuro ? '#334155' : '#e2e8f0';
  const titleColor = modoOscuro ? '#f8fafc' : '#0f172a';
  const textColor = modoOscuro ? '#cbd5e1' : '#64748b';
  const labelColor = modoOscuro ? '#94a3b8' : '#475569';
  const inputBg = modoOscuro ? '#0f172a' : '#ffffff';
  const inputBorder = modoOscuro ? '#475569' : '#cbd5e1';

  // Validación de RUT Chileno (Módulo 11)
  const validarRutChileno = (rutCompleto) => {
    const cleanRut = rutCompleto.replace(/[^0-9kK]/g, '');
    if (cleanRut.length < 8) return false;

    const cuerpo = cleanRut.slice(0, -1);
    const dv = cleanRut.slice(-1).toUpperCase();

    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += multiplo * parseInt(cuerpo.charAt(i), 10);
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const dvEsperado = 11 - (suma % 11);
    let dvCalc = '0';
    if (dvEsperado === 11) dvCalc = '0';
    else if (dvEsperado === 10) dvCalc = 'K';
    else dvCalc = dvEsperado.toString();

    return dv === dvCalc;
  };

  const handleRutChange = (e) => {
    let value = e.target.value.replace(/[^0-9kK]/g, '');
    if (value.length > 9) value = value.slice(0, 9);

    if (value.length > 1) {
      const cuerpo = value.slice(0, -1);
      const dv = value.slice(-1);
      const cuerpoFormateado = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      setRut(`${cuerpoFormateado}-${dv}`);
    } else {
      setRut(value);
    }
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rut.trim()) {
      setError('Por favor, ingresa tu RUT.');
      return;
    }

    if (!validarRutChileno(rut)) {
      setError('El RUT ingresado no es válido.');
      return;
    }

    if (!password) {
      setError('Por favor, ingresa tu contraseña.');
      return;
    }

    const datosUsuario = { rut, fechaInicio: new Date().toISOString() };
    localStorage.setItem('usuario', JSON.stringify(datosUsuario));

    if (setUsuarioAutenticado) {
      setUsuarioAutenticado(true);
    }

    navigate('/mismascotas');
  };

  const handleSocialLogin = (proveedor) => {
    const datosUsuario = { proveedor, fechaInicio: new Date().toISOString() };
    localStorage.setItem('usuario', JSON.stringify(datosUsuario));

    if (setUsuarioAutenticado) {
      setUsuarioAutenticado(true);
    }

    navigate('/mismascotas');
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 70px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: containerBg,
      padding: '1.5rem',
      transition: 'background-color 0.3s ease'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: cardBg,
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        border: `1px solid ${borderColor}`,
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}>
        {/* Logo / Badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: modoOscuro ? '#3b82f6' : '#eff6ff',
            color: modoOscuro ? '#ffffff' : '#1e3a8a',
            fontWeight: '700',
            fontSize: '1.2rem',
            marginBottom: '1rem'
          }}>
            CV
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: titleColor, marginBottom: '0.25rem' }}>
            ¡Bienvenido de vuelta!
          </h1>
          <p style={{ fontSize: '0.875rem', color: textColor }}>
            Ingresa a tu cuenta de Centro Veterinario
          </p>
        </div>

        {/* Botones Redes Sociales */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <button
            type="button"
            onClick={() => handleSocialLogin('Google')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              width: '100%',
              padding: '0.65rem',
              borderRadius: '8px',
              border: `1px solid ${inputBorder}`,
              backgroundColor: modoOscuro ? '#0f172a' : '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: titleColor,
              cursor: 'pointer'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            Continuar con Google
          </button>

          <button
            type="button"
            onClick={() => handleSocialLogin('iCloud')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              width: '100%',
              padding: '0.65rem',
              borderRadius: '8px',
              border: modoOscuro ? '1px solid #475569' : 'none',
              backgroundColor: modoOscuro ? '#334155' : '#000000',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-.96.04-2.13.64-2.82 1.44-.61.71-1.15 1.86-1 2.98 1.08.08 2.17-.58 2.83-1.38z"/>
            </svg>
            Continuar con iCloud
          </button>
        </div>

        {/* Separador */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: textColor,
          fontSize: '0.75rem',
          fontWeight: 700,
          margin: '1.5rem 0'
        }}>
          <div style={{ flex: 1, borderBottom: `1px solid ${borderColor}` }}></div>
          <span style={{ padding: '0 0.75rem', textTransform: 'uppercase' }}>O ingresa con RUT</span>
          <div style={{ flex: 1, borderBottom: `1px solid ${borderColor}` }}></div>
        </div>

        {/* Alerta de Error */}
        {error && (
          <div style={{
            backgroundColor: modoOscuro ? '#451a1a' : '#fef2f2',
            border: '1px solid #fecaca',
            color: modoOscuro ? '#fca5a5' : '#dc2626',
            padding: '0.75rem',
            borderRadius: '8px',
            fontSize: '0.825rem',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: labelColor,
              marginBottom: '0.35rem',
              textTransform: 'uppercase'
            }}>
              RUT Usuario
            </label>
            <input
              type="text"
              placeholder="12.345.678-9"
              value={rut}
              onChange={handleRutChange}
              style={{
                width: '100%',
                padding: '0.65rem 0.8rem',
                borderRadius: '8px',
                border: `1px solid ${inputBorder}`,
                backgroundColor: inputBg,
                fontSize: '0.9rem',
                color: titleColor,
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: labelColor,
              marginBottom: '0.35rem',
              textTransform: 'uppercase'
            }}>
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError('');
              }}
              style={{
                width: '100%',
                padding: '0.65rem 0.8rem',
                borderRadius: '8px',
                border: `1px solid ${inputBorder}`,
                backgroundColor: inputBg,
                fontSize: '0.9rem',
                color: titleColor,
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#1e3a8a',
              color: '#ffffff',
              padding: '0.75rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            Ingresar al Sistema
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;