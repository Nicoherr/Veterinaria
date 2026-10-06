import { validarRut, validarTelefono } from './validaciones.js';

describe('Pruebas del módulo de validaciones VetSM', () => {
  it('Debe validar un RUT chileno correcto con guion', () => {
    expect(validarRut('12345678-K')).toBeTrue();
  });

  it('Debe rechazar un RUT sin formato válido', () => {
    expect(validarRut('12345678')).toBeFalse();
  });

  it('Debe validar un teléfono chileno de 9 dígitos', () => {
    expect(validarTelefono('912345678')).toBeTrue();
  });

  it('Debe rechazar un teléfono con menos o más de 9 dígitos', () => {
    expect(validarTelefono('12345')).toBeFalse();
  });
});