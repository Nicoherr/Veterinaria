import { obtenerMascotas, agregarMascota } from './mascotasService.js';

describe('Pruebas unitarias de MascotasService', () => {
  it('debe retornar el listado completo de mascotas', () => {
    const lista = obtenerMascotas();
    expect(lista.length).toBeGreaterThan(0);
  });

  it('debe encontrar una mascota existente por ID', () => {
    const mascota = buscarMascotaPorId(1);
    expect(mascota).not.toBeNull();
    expect(mascota.nombre).toBe('Max');
  });

  it('debe retornar null si la mascota no existe', () => {
    const mascota = buscarMascotaPorId(999);
    expect(mascota).toBeNull();
  });

  it('debe filtrar mascotas por tipo correctamente', () => {
    const perros = filtrarMascotasPorTipo('Perro');
    expect(perros.length).toBe(1);
    expect(perros[0].tipo).toBe('Perro');
  });
});