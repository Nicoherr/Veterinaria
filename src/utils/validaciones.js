export function validarLogin({ email, password }) {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !email.trim()) {
    errors.email = 'El correo es obligatorio.';
  } else if (!emailRegex.test(email.trim())) {
    errors.email = 'El formato de correo no es válido.';
  }

  if (!password || !password.trim()) {
    errors.password = 'La contraseña es obligatoria.';
  } else if (password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres.';
  }

  return errors;
}

export function validarContacto({ nombre, email, telefono, asunto, mensaje }) {
  const errors = {};
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{8,11}$/;

  if (!nombre || !nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio.';
  } else if (!nameRegex.test(nombre.trim())) {
    errors.nombre = 'El nombre solo debe contener letras.';
  }

  if (!email || !email.trim()) {
    errors.email = 'El correo es obligatorio.';
  } else if (!emailRegex.test(email.trim())) {
    errors.email = 'El formato de correo no es válido.';
  }

  if (!telefono || !telefono.trim()) {
    errors.telefono = 'El teléfono es obligatorio.';
  } else if (!phoneRegex.test(telefono.replace(/\s+/g, ''))) {
    errors.telefono = 'Debe ingresar un teléfono válido de al menos 8 dígitos.';
  }

  if (!asunto || !asunto.trim()) {
    errors.asunto = 'El asunto es obligatorio.';
  }

  if (!mensaje || !mensaje.trim()) {
    errors.mensaje = 'El mensaje no puede estar vacío.';
  } else if (mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
  }

  return errors;
}