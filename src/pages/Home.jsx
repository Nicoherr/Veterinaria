import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ modoOscuro }) => {
  return (
    <div style={{
      color: modoOscuro ? '#f8fafc' : '#0f172a',
      backgroundColor: modoOscuro ? '#0b1329' : '#f8fafc',
      minHeight: '100vh',
      transition: 'all 0.3s ease'
    }}>
      {/* 1. SECCIÓN HERO / BIENVENIDA */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '1rem',
            color: modoOscuro ? '#38bdf8' : '#0284c7'
          }}>
            Atención Médica Veterinaria de Excelencia
          </h1>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: modoOscuro ? '#94a3b8' : '#64748b',
            marginBottom: '1.5rem'
          }}>
            En VetSM nos apasiona el cuidado y bienestar de tus mascotas. Contamos con equipamiento médico avanzado, atención de urgencias y un equipo comprometido con la salud animal.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/citas" style={{
              backgroundColor: '#0284c7',
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Agendar Cita
            </Link>
            <Link to="/servicios" style={{
              backgroundColor: modoOscuro ? '#1e293b' : '#e2e8f0',
              color: modoOscuro ? '#f8fafc' : '#0f172a',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Nuestros Servicios
            </Link>
          </div>
        </div>

        {/* Imagen del Hero */}
        <div style={{ textAlign: 'center' }}>
          <img 
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80" 
            alt="Veterinario atendiendo un perro" 
            style={{
              width: '100%',
              maxHeight: '380px',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: modoOscuro 
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)' 
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </section>

      {/* 2. GALERÍA DE INSTALACIONES / MUESTRA */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1.5rem'
      }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          textAlign: 'center',
          color: modoOscuro ? '#f8fafc' : '#0f172a'
        }}>
          Nuestras Instalaciones
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.25rem'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80" 
            alt="Consulta Veterinaria" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }}
          />
          <img 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80" 
            alt="Atención médica perro" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }}
          />
          <img 
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80" 
            alt="Equipo Médico" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>
      </section>

      {/* 3. SECCIÓN DE MAPA Y UBICACIÓN */}
      <section style={{
        maxWidth: '1200px',
        margin: '2rem auto 0 auto',
        padding: '0 1.5rem'
      }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: '700',
          marginBottom: '1rem',
          textAlign: 'center',
          color: modoOscuro ? '#f8fafc' : '#0f172a'
        }}>
          Dónde Encontrarnos
        </h2>
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: modoOscuro 
            ? '0 4px 12px rgba(0,0,0,0.4)' 
            : '0 4px 12px rgba(0,0,0,0.08)',
          height: '350px'
        }}>
          <iframe
            title="Ubicación VetSM"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.80826978411!2d-70.6136!3d-33.4258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9692cabb12345678%3A0x123456789abcdef!2sAv.%20Providencia%201234%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* 4. SECCIÓN INFERIOR: DETALLES DE CONTACTO Y REDES SOCIALES */}
      <section style={{
        backgroundColor: modoOscuro ? '#0f172a' : '#f1f5f9',
        borderTop: `1px solid ${modoOscuro ? '#1e293b' : '#e2e8f0'}`,
        padding: '3rem 1.5rem',
        marginTop: '3.5rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem'
        }}>
          
          {/* Columna 1: Presentación */}
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              marginBottom: '0.75rem',
              color: modoOscuro ? '#38bdf8' : '#0284c7'
            }}>
              VetSM
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: modoOscuro ? '#94a3b8' : '#64748b',
              lineHeight: '1.6'
            }}>
              Centro médico veterinario enfocado en brindar una experiencia integral de salud y prevención para tus mascotas.
            </p>
          </div>

          {/* Columna 2: Contacto y Dirección */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: modoOscuro ? '#f8fafc' : '#0f172a'
            }}>
              Contacto y Ubicación
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              fontSize: '0.9rem',
              color: modoOscuro ? '#cbd5e1' : '#475569'
            }}>
              <li>📍 Av. Providencia 1234, Santiago, Chile</li>
              <li>📞 +56 9 1234 5678 / +56 2 2345 6789</li>
              <li>✉️ contacto@vetsm.cl</li>
            </ul>
          </div>

          {/* Columna 3: Horarios */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: modoOscuro ? '#f8fafc' : '#0f172a'
            }}>
              Horarios
            </h4>
            <p style={{ fontSize: '0.9rem', color: modoOscuro ? '#cbd5e1' : '#475569', margin: '0 0 0.4rem 0' }}>
              <strong>Lunes a Sábado:</strong> 08:30 - 20:00 hrs
            </p>
            <p style={{ fontSize: '0.9rem', color: modoOscuro ? '#cbd5e1' : '#475569', margin: 0 }}>
              <strong>Urgencias:</strong> Atención 24/7
            </p>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: modoOscuro ? '#f8fafc' : '#0f172a'
            }}>
              Síguenos
            </h4>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  backgroundColor: modoOscuro ? '#1e293b' : '#ffffff',
                  color: modoOscuro ? '#f8fafc' : '#0f172a',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  border: `1px solid ${modoOscuro ? '#334155' : '#cbd5e1'}`
                }}
              >
                📷 Instagram
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  backgroundColor: modoOscuro ? '#1e293b' : '#ffffff',
                  color: modoOscuro ? '#f8fafc' : '#0f172a',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  border: `1px solid ${modoOscuro ? '#334155' : '#cbd5e1'}`
                }}
              >
                📘 Facebook
              </a>
              <a 
                href="https://wa.me/56912345678" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  backgroundColor: '#16a34a',
                  color: '#ffffff',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;