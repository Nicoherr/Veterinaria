import { validarEmail, validarTelefono } from './validaciones.js';

describe('Pruebas unitarias de Validaciones', () => {
  describe('validarLogin', () => {
    it('debe retornar errores cuando los campos están vacíos', () => {
      const res = validarLogin({ email: '', password: '' });
      expect(res.email).toBe('El correo es obligatorio.');
      expect(res.password).toBe('La contraseña es obligatoria.');
    });

    it('debe validar el formato del correo y el tamaño de la contraseña', () => {
      const res = validarLogin({ email: 'correo-invalido', password: '123' });
      expect(res.email).toBe('El formato de correo no es válido.');
      expect(res.password).toBe('La contraseña debe tener al menos 6 caracteres.');
    });

    it('no debe retornar errores si los datos son correctos', () => {
      const res = validarLogin({ email: 'usuario@vetsm.cl', password: 'password123' });
      expect(Object.keys(res).length).toBe(0);
    });
  });

  describe('validarContacto', () => {
    it('debe detectar campos incompletos en el formulario de contacto', () => {
      const res = validarContacto({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
      expect(res.nombre).toBe('El nombre es obligatorio.');
      expect(res.email).toBe('El correo es obligatorio.');
      expect(res.telefono).toBe('El teléfono es obligatorio.');
      expect(res.asunto).toBe('El asunto es obligatorio.');
      expect(res.mensaje).toBe('El mensaje no puede estar vacío.');
    });

    it('debe validar que el nombre no contenga números y que el teléfono sea válido', () => {
      const res = validarContacto({
        nombre: 'Juan123',
        email: 'juan@test.com',
        telefono: '123',
        asunto: 'Consulta',
        mensaje: 'Mensaje de prueba más de 10 caracteres'
      });
      expect(res.nombre).toBe('El nombre solo debe contener letras.');
      expect(res.telefono).toBe('Debe ingresar un teléfono válido de al menos 8 dígitos.');
    });
  });
});