import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ darkMode }) {
  const textColor = darkMode ? '#f8fafc' : '#0f172a';
  const subTextColor = darkMode ? '#cbd5e1' : '#475569';
  const cardBg = darkMode ? '#1e293b' : '#ffffff';
  const borderColor = darkMode ? '#334155' : '#e2e8f0';

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      {/* 1. HERO SECTION */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '4rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '1rem', lineHeight: '1.2' }}>
            Atención Médica Veterinaria de Excelencia
          </h1>
          <p style={{ color: subTextColor, fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            En VetSM nos apasiona el cuidado y bienestar de tus mascotas. Contamos con equipamiento médico avanzado, atención de urgencias y un equipo comprometido con la salud animal.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/citas" style={{ backgroundColor: '#0284c7', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', textDecoration: 'none' }}>
              Agendar Cita
            </Link>
            <Link to="/servicios" style={{ backgroundColor: darkMode ? '#334155' : '#e2e8f0', color: darkMode ? '#fff' : '#0f172a', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', textDecoration: 'none' }}>
              Nuestros Servicios
            </Link>
          </div>
        </div>

        <div>
          <img 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80" 
            alt="Veterinaria San Marcos" 
            style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* 2. NUESTRAS INSTALACIONES */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', textAlign: 'center', color: textColor, marginBottom: '2rem' }}>
          Nuestras Instalaciones
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <img src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80" alt="Instalación 1" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }} />
          <img src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80" alt="Instalación 2" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }} />
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" alt="Instalación 3" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }} />
        </div>
      </section>

      {/* 3. DATOS DE CONTACTO Y MAPA (Recuperados) */}
      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', textAlign: 'center', color: textColor, marginBottom: '2rem' }}>
          📍 Ubicación y Contacto
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* Tarjeta de Información */}
          <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#38bdf8', marginBottom: '1.2rem' }}>
              Clínica VetSM San Marcos
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: subTextColor, fontSize: '0.95rem' }}>
              <p style={{ margin: 0 }}>
                <strong>🏢 Dirección:</strong> Av. San Marcos 1234, Santiago, Chile
              </p>
              <p style={{ margin: 0 }}>
                <strong>📞 Teléfono:</strong> +56 2 2345 6789 / +56 9 8765 4321
              </p>
              <p style={{ margin: 0 }}>
                <strong>✉️ Correo:</strong> contacto@vetsm.cl
              </p>
              <p style={{ margin: 0 }}>
                <strong>🚨 Urgencias 24/7:</strong> +56 9 1111 2222
              </p>
            </div>

            <hr style={{ borderColor: borderColor, margin: '1.5rem 0' }} />

            <h4 style={{ fontSize: '1rem', color: textColor, marginBottom: '0.5rem' }}>Horario de Atención</h4>
            <p style={{ margin: '0.2rem 0', color: subTextColor, fontSize: '0.9rem' }}>Lunes a Viernes: 08:30 hrs - 20:00 hrs</p>
            <p style={{ margin: '0.2rem 0', color: subTextColor, fontSize: '0.9rem' }}>Sábados y Domingos: 09:00 hrs - 18:00 hrs</p>
          </div>

          {/* Mapa Interactivo Google Maps */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: `1px solid ${borderColor}`, minHeight: '340px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <iframe
              title="Mapa Ubicación VetSM"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3134907090885!2d-70.65045022352227!3d-33.44118319692487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a0342a3a5f%3A0x6b4a3a60f9e31d34!2sSantiago%20Centro%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}