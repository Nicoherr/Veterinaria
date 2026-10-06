import { 
  validarEmail, 
  validarRut, 
  validarTelefono, 
  validarNombre, 
  validarContrasena, 
  calcularTotalCarrito, 
  aplicarDescuento, 
  validarStockDisponible, 
  formatearMonedaCLP, 
  validarFormularioMascota 
} from './validaciones';

describe('Pruebas Unitarias - Veterinaria VetVida', () => {
  it('CP01: Debe validar correctamente un correo electrónico', () => {
    expect(validarEmail('cliente@veterinaria.cl')).toBeTrue();
    expect(validarEmail('correo-invalido')).toBeFalse();
  });

  it('CP02: Debe verificar la estructura del RUT', () => {
    expect(validarRut('19876543-2')).toBeTrue();
    expect(validarRut('123')).toBeFalse();
  });

  it('CP03: Debe validar un teléfono chileno', () => {
    expect(validarTelefono('+56912345678')).toBeTrue();
    expect(validarTelefono('1234')).toBeFalse();
  });

  it('CP04: Debe validar un nombre de al menos 3 caracteres', () => {
    expect(validarNombre('Nicolás')).toBeTrue();
    expect(validarNombre('Al')).toBeFalse();
  });

  it('CP05: Debe exigir una contraseña de mínimo 6 caracteres', () => {
    expect(validarContrasena('123456')).toBeTrue();
    expect(validarContrasena('123')).toBeFalse();
  });

  it('CP06: Debe calcular el total del carrito', () => {
    const items = [{ precio: 5000, cantidad: 2 }, { precio: 10000, cantidad: 1 }];
    expect(calcularTotalCarrito(items)).toBe(20000);
  });

  it('CP07: Debe aplicar descuentos adecuadamente', () => {
    expect(aplicarDescuento(10000, 10)).toBe(9000);
  });

  it('CP08: Debe comprobar stock disponible', () => {
    const prod = { stock: 5 };
    expect(validarStockDisponible(prod, 3)).toBeTrue();
    expect(validarStockDisponible(prod, 10)).toBeFalse();
  });

  it('CP09: Debe formatear a peso chileno', () => {
    expect(formatearMonedaCLP(15000)).toContain('15.000');
  });

  it('CP10: Debe validar formulario de mascota', () => {
    const mascota = { nombre: 'Cachupín', especie: 'Perro', edad: 2 };
    expect(validarFormularioMascota(mascota)).toBeTrue();
  });
});