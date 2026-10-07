// Validar RUT chileno simple (o formato genérico)
export const validarRut = (rut) => {
  if (!rut) return false;
  const cleanRut = rut.replace(/[^0-9kK]/g, '');
  return cleanRut.length >= 8 && cleanRut.length <= 9;
};

// Validar campos requeridos en formularios
export const validarCampoRequerido = (valor) => {
  return valor !== null && valor !== undefined && valor.toString().trim() !== '';
};

// Validar fecha futura para citas
export const validarFechaCita = (fechaStr) => {
  const fecha = new Date(fechaStr);
  const hoy = new Date();
  return fecha >= hoy;
};