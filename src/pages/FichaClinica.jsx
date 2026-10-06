import React, { useState } from 'react';

export default function FichaClinica() {
  const [ficha, setFicha] = useState({
    nombreMascota: '',
    rutDuenio: '',
    diagnostico: '',
    tratamiento: '',
    medicamentos: '',
    proximoControl: ''
  });

  const [guardado, setGuardado] = useState(false);

  const handleChange = (e) => {
    setFicha({ ...ficha, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuardado(true);
    setTimeout(() => setGuardado(false), 3000);
  };

  return (
    <div className="container my-5" style={{ maxWidth: '700px' }}>
      <div className="card p-4 shadow-sm">
        <h2 className="text-primary-custom mb-4 text-center">Registro de Ficha Clínica (Uso Médico)</h2>

        {guardado && <div className="alert alert-success">¡Diagnóstico y tratamiento registrados con éxito!</div>}

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Nombre Paciente (Mascota)</label>
              <input type="text" name="nombreMascota" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">RUT del Dueño</label>
              <input type="text" name="rutDuenio" className="form-control" placeholder="12345678-K" required onChange={handleChange} />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Diagnóstico</label>
            <textarea name="diagnostico" className="form-control" rows="3" required onChange={handleChange}></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Tratamiento Indicado</label>
            <textarea name="tratamiento" className="form-control" rows="3" required onChange={handleChange}></textarea>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Medicamentos Recetados</label>
              <input type="text" name="medicamentos" className="form-control" onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Próximo Control</label>
              <input type="date" name="proximoControl" className="form-control" onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="btn btn-skin w-100 fw-bold">
            Guardar en Ficha Clínica
          </button>
        </form>
      </div>
    </div>
  );
}