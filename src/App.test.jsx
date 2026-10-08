import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import App from './App';

describe('Pruebas Unitarias - VetSM', () => {
  it('Debe renderizar elementos con el nombre VetSM en la plataforma', () => {
    render(<App />);
    const elementos = screen.getAllByText(/VetSM/i);
    expect(elementos.length).toBeGreaterThan(0);
    expect(elementos[0]).toBeInTheDocument();
  });
});