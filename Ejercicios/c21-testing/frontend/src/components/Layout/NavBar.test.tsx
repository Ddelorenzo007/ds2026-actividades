import { it, expect, vi } from 'vitest';
import type { Rol, Usuario } from '../../types/sesionType';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BusquedaProvider } from '../../context/BusquedaContext';
import { AuthContext } from '../../context/AuthContext';
import NavBar from './Navbar';
import { screen } from '@testing-library/react';

function renderNavBar(usuario: Usuario | null) {
  const auth = { usuario, cargando: false, estaAutenticado: usuario !== null,
    tieneRol: (rol: Rol) => usuario?.rol === rol, login: vi.fn(), logout: vi.fn() };
  return render(
    <MemoryRouter>
      <BusquedaProvider>
        <AuthContext.Provider value={auth}>
          <NavBar />
        </AuthContext.Provider>
      </BusquedaProvider>
    </MemoryRouter>,
  );
}

it('CLIENTE: saluda por nombre y NO ve "Nuevo libro"', () => {
  renderNavBar({ id: 2, email: 'cliente@libreria.test', nombre: 'Cliente', rol: 'CLIENTE' });
  expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
});