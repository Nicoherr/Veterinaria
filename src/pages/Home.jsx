import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ color: 'var(--text-main)', paddingBottom: '4rem' }}>
      
      {/* 1. HERO SECTION REDISEÑADO */}
      <section style={{
        position: 'relative',
        borderRadius: '24px',
        margin: '1.5rem auto 3rem',
        padding: '4rem 2rem',
        maxWidth: '1200px',
        backgroundColor: '#24201d',
        border: '1px solid #38332e',
        overflow: 'hidden',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}>
        {/* Glow de fondo decorativo */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(198,139,89,0.18) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }} />

        <span style={{
          display: 'inline-block',
          backgroundColor: 'rgba(198, 139, 89, 0.15)',
          color: '#c68b59',
          fontSize: '0.85rem',
          fontWeight: 700,
          padding: '0.4rem 1.2rem',
          borderRadius: '20px',
          marginBottom: '1.2rem',
          border: '1px solid rgba(198, 139, 89, 0.3)'
        }}>
          ✨ ATENCIÓN VETERINARIA DIGITALIZADA
        </span>

        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: 800,
          marginBottom: '1rem',
          lineHeight: 1.2,
          color: '#ffffff'
        }}>
          Salud y bienestar para quien <br />
          <span style={{ color: '#c68b59' }}>más alegra tu hogar</span>
        </h1>

        <p style={{
          maxWdith: '650px',
          margin: '0 auto 2rem',
          color: '#a39e99',
          fontSize: '1.1rem',
          lineHeight: 1.6
        }}>
          Atención médica empática, furgón veterinario a domicilio, ficha clínica digitalizada y agendamiento 24/7 sin filas ni esperas.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/citas" style={{
            backgroundColor: '#c68b59',
            color: '#ffffff',
            padding: '0.9rem 2rem',
            borderRadius: '12px',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '1rem',
            boxShadow: '0 6px 20px rgba(198, 139, 89, 0.35)',
            transition: 'transform 0.2s'
          }}>
            📅 Agendar Cita
          </Link>
          <Link to="/login" style={{
            backgroundColor: 'transparent',
            color: '#e5e7eb',
            padding: '0.9rem 2rem',
            borderRadius: '12px',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '1rem',
            border: '1px solid #4a443e'
          }}>
            🔑 Ingresar al Portal
          </Link>
        </div>
      </section>

      {/* 2. ESTADÍSTICAS / CINTA DESTACADA */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 4rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        padding: '0 1rem'
      }}>
        {[
          { num: '+3,500', text: 'Mascotas Atendidas', icon: '🐶' },
          { num: '99.2%', text: 'Clientes Satisfechos', icon: '⭐' },
          { num: '24/7', text: 'Ficha Clínica Online', icon: '📋' },
          { num: '100%', text: 'Amor y Dedicación', icon: '❤️' },
        ].map((stat, idx) => (
          <div key={idx} style={{
            backgroundColor: '#24201d',
            border: '1px solid #38332e',
            borderRadius: '16px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#c68b59' }}>{stat.num}</div>
            <div style={{ fontSize: '0.9rem', color: '#a39e99', marginTop: '0.2rem' }}>{stat.text}</div>
          </div>
        ))}
      </section>

      {/* 3. SERVICIOS DESTACADOS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 4rem', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Nuestros Servicios</h2>
          <p style={{ color: '#a39e99' }}>Especialistas calificados listos para atender a tu mascota</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              titulo: 'Consultas Médicas',
              desc: 'Revisiones generales, diagnósticos especializados y seguimiento médico continuo.',
              img: 'https://images.unsplash.com/photo-1532598187460-98fe8826d1e2?auto=format&fit=crop&w=600&q=80',
              tag: 'Medicina General'
            },
            {
              titulo: 'Vacunación y Control',
              desc: 'Planes completos de vacunación, microchip y registro de desparasitaciones periódicas.',
              img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=600&q=80',
              tag: 'Prevención'
            },
            {
              titulo: 'Ficha Clínica Digital',
              desc: 'Accede al historial de vacunas, recetas y atenciones pasadas desde cualquier dispositivo.',
              img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
              tag: 'Tecnología'
            }
          ].map((serv, idx) => (
            <div key={idx} style={{
              backgroundColor: '#24201d',
              border: '1px solid #38332e',
              borderRadius: '20px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img 
                  src={serv.img} 
                  alt={serv.titulo} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: '#c68b59',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backdropFilter: 'blur(4px)'
                }}>
                  {serv.tag}
                </span>
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.6rem', color: '#ffffff' }}>
                    {serv.titulo}
                  </h3>
                  <p style={{ color: '#a39e99', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    {serv.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BANNER POR QUÉ ELEGIRNOS */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          backgroundColor: '#1e1b18',
          border: '1px solid #38332e',
          borderRadius: '24px',
          padding: '3rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
              ¿Por qué elegir Veterinaria San Marcos?
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Atención personalizada con profesionales certificados.',
                'Recordatorios automáticos para vacunas y revisiones.',
                'Infraestructura moderna para exámenes e intervenciones.',
                'Portal exclusivo para el seguimiento del paciente.'
              ].map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#d1d5db', fontSize: '0.98rem' }}>
                  <span style={{ color: '#c68b59', fontWeight: 'bold' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              backgroundColor: '#24201d',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid #38332e'
            }}>
              <span style={{ fontSize: '2.5rem' }}>🚑</span>
              <h3 style={{ color: '#ffffff', margin: '0.8rem 0 0.4rem' }}>¿Emergencia Veterinaria?</h3>
              <p style={{ color: '#a39e99', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
                Contamos con canales de atención prioritaria.
              </p>
              <a href="tel:+56912345678" style={{
                display: 'inline-block',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                padding: '0.8rem 1.5rem',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none'
              }}>
                Llamar Urgencias
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;