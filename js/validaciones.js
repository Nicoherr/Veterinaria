// ===========================================================
// Veterinaria San Marcos - Validación del formulario de citas
// ===========================================================
 
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cita");
  if (!form) return;
 
  const mensajeExito = document.getElementById("mensaje-exito");
 
  // Reglas de validación por campo: cada una devuelve un mensaje
  // de error (string) o "" si el campo es válido.
  const reglas = {
    "nombre-dueno": (valor) => {
      if (valor.trim() === "") return "El nombre del dueño/a es obligatorio.";
      if (valor.trim().length < 3) return "Ingresa un nombre de al menos 3 caracteres.";
      return "";
    },
    telefono: (valor) => {
      const patron = /^\+?\d[\d\s]{7,14}\d$/;
      if (valor.trim() === "") return "El teléfono es obligatorio.";
      if (!patron.test(valor.trim())) return "Ingresa un teléfono válido, ej: +56 9 1234 5678.";
      return "";
    },
    "nombre-mascota": (valor) => {
      if (valor.trim() === "") return "El nombre de la mascota es obligatorio.";
      if (valor.trim().length < 2) return "Ingresa un nombre de al menos 2 caracteres.";
      return "";
    },
    especie: (valor) => {
      if (valor === "") return "Selecciona la especie de tu mascota.";
      return "";
    },
    servicio: (valor) => {
      if (valor.trim() === "") return "Indica el servicio que necesitas.";
      return "";
    },
    fecha: (valor) => {
      if (valor === "") return "Selecciona una fecha.";
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      const fechaElegida = new Date(valor + "T00:00:00");
      if (fechaElegida < hoy) return "La fecha no puede ser anterior a hoy.";
      return "";
    },
    hora: (valor) => {
      if (valor === "") return "Selecciona una hora.";
      const [h] = valor.split(":").map(Number);
      if (h < 9 || h >= 19) return "Nuestro horario de atención es de 09:00 a 19:00.";
      return "";
    },
  };
 
  function mostrarError(idCampo, mensaje) {
    const campo = document.getElementById(idCampo);
    const spanError = document.getElementById(`error-${idCampo}`);
    if (spanError) spanError.textContent = mensaje;
    campo.classList.toggle("invalido", mensaje !== "");
  }
 
  function validarCampo(idCampo) {
    const campo = document.getElementById(idCampo);
    const regla = reglas[idCampo];
    if (!campo || !regla) return true;
    const mensaje = regla(campo.value);
    mostrarError(idCampo, mensaje);
    return mensaje === "";
  }
 
  // Validación en tiempo real al salir de cada campo
  Object.keys(reglas).forEach((idCampo) => {
    const campo = document.getElementById(idCampo);
    if (campo) {
      campo.addEventListener("blur", () => validarCampo(idCampo));
      campo.addEventListener("input", () => {
        // Si ya había error, lo va limpiando mientras el usuario corrige
        if (campo.classList.contains("invalido")) validarCampo(idCampo);
      });
    }
  });
 
  // Validación completa al enviar
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensajeExito.style.display = "none";
 
    let formularioValido = true;
    Object.keys(reglas).forEach((idCampo) => {
      const esValido = validarCampo(idCampo);
      if (!esValido) formularioValido = false;
    });
 
    if (formularioValido) {
      mensajeExito.style.display = "block";
      form.reset();
      // En esta etapa (mockup) no se envía a un backend real;
      // en etapas posteriores esto se conectará a la API REST del
      // microservicio de solicitudes/citas.
    } else {
      // Lleva el foco al primer campo con error para accesibilidad
      const primerInvalido = form.querySelector(".invalido");
      if (primerInvalido) primerInvalido.focus();
    }
  });
});