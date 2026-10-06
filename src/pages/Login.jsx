import React, { useState } from 'react';

const Login = () => {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({});

  // Algoritmo Módulo 11 para validar RUT chileno
  const validarRutChileno = (rutCompleto) => {
    const cleanRut = rutCompleto.replace(/[^0-9kK]/g, '');
    if (cleanRut.length < 8) return false;

    const cuerpo = cleanRut.slice(0, -1);
    let dv = cleanRut.slice(-1).toUpperCase();

    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo.charAt(i), 10) * multiplo;
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const dvEsperado = 11 - (suma % 11);
    let dvCalc = '';
    if (dvEsperado === 11) dvCalc = '0';
    else if (dvEsperado === 10) dvCalc = 'K';
    else dvCalc = dvEsperado.toString();

    return dv === dvCalc;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (!rut.trim()) {
      nuevosErrores.rut = 'El RUT es obligatorio.';
    } else if (!validarRutChileno(rut)) {
      nuevosErrores.rut = 'El RUT ingresado no es válido (ej: 12.345.678-9).';
    }

    if (!password) {
      nuevosErrores.password = 'La contraseña es obligatoria.';
    } else if (password.length < 6) {
      nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setErrores({});
    // Guardamos el usuario autenticado
    const usuario = { rut, nombre: 'Usuario San Marcos' };
    localStorage.setItem('usuario_vetsm', JSON.stringify(usuario));
    window.location.href = '/';
  };

  const handleSocialLogin = (provider) => {
    const usuario = { 
      rut: '12.345.678-9', 
      nombre: `Usuario ${provider}` 
    };
    localStorage.setItem('usuario_vetsm', JSON.stringify(usuario));
    window.location.href = '/';
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 700,
    color: 'var(--text-muted)',
    marginBottom: '0.4rem',
    textTransform: 'uppercase'
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '2rem 1rem' }}>
      <div 
        className="card" 
        style={{ 
          width: '100%', 
          maxWidth: '420px', 
          padding: '2.5rem 2rem', 
          textAlign: 'center' 
        }}
      >
        <div 
          style={{ 
            width: '56px', 
            height: '56px', 
            backgroundColor: 'var(--primary)', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 1.2rem',
            color: '#ffffff',
            fontSize: '1.8rem',
            boxShadow: '0 4px 12px rgba(198, 139, 89, 0.25)'
          }}
        >
          🐾
        </div>

        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
          ¡Bienvenido de vuelta!
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
          Ingresa a tu cuenta de Veterinaria San Marcos
        </p>

        {/* BOTONES SOCIAL LOGIN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
          <button
            type="button"
            onClick={() => handleSocialLogin('Google')}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-main)',
              color: 'var(--text-main)',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"/>
            </svg>
            Continuar con Google
          </button>

          <button
            type="button"
            onClick={() => handleSocialLogin('iCloud')}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-main)',
              color: 'var(--text-main)',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.68-.83 1.14-1.99.1-3.15-.98.04-2.17.65-2.86 1.46-.62.72-1.16 1.89-1.02 3.03 1.1.08 2.22-.51 2.78-1.34z"/>
            </svg>
            Continuar con iCloud
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '1.2rem 0', gap: '0.8rem' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color)' }}></div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>o ingresa con RUT</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color)' }}></div>
        </div>

        {/* FORMULARIO */}
        <form onSubmit={handleLogin} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', textAlign: 'left' }}>
          <div>
            <label style={labelStyle}>RUT Usuario</label>
            <input
              type="text"
              placeholder="12.345.678-9"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '10px',
                border: errores.rut ? '1px solid #e53e3e' : '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            {errores.rut && <span style={{ color: '#e53e3e', fontSize: '0.8rem', marginTop: '0.3rem', display: 'block' }}>{errores.rut}</span>}
          </div>

          <div>
            <label style={labelStyle}>Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '10px',
                border: errores.password ? '1px solid #e53e3e' : '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            {errores.password && <span style={{ color: '#e53e3e', fontSize: '0.8rem', marginTop: '0.3rem', display: 'block' }}>{errores.password}</span>}
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
          >
            Ingresar al Sistema
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;