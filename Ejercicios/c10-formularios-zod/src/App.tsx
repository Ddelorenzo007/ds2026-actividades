import Home from './pages/Home';
import './App.css'
import Layout from './components/Layout/Layout';
import Libros from './pages/Catalogo';
import DetalleLibro from './pages/LibroDetalle';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import type libroCardProps from './types/libroCardProps';
import LibroNuevo from './pages/LibroNuevo';

export const librosIniciales: libroCardProps[] = [
    {
        id: 1,
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      precio: 12500,
      imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/75/23/75237f2f609042d9713cb03b681c77c1.jpg',
      disponible: true
    },
    {
        id: 2,
      titulo: '1984',
      autor: 'George Orwell',
      precio: 15000,
      imagen: 'https://covers.openlibrary.org/b/isbn/9788499890944-L.jpg',
      disponible: false
    },
    {
        id: 3,
      titulo: 'Rayuela',
      autor: 'Julio Cortázar',
      precio: 18000,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Rayuela_JC.png',
      disponible: true
    }
]
function App() {
  const [libros, setLibros] = useState<libroCardProps[]>(librosIniciales);
  const agregarLibro = (nuevo: libroCardProps) => setLibros([...libros, nuevo]);
  
  return (
    <Layout>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/catalogo" element={<Libros libros={libros} />} />
        <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={agregarLibro} />} />
        <Route path="/catalogo/:id"   element={<DetalleLibro />} />
        {/* <Route path="/contacto"    element={<ContactPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;