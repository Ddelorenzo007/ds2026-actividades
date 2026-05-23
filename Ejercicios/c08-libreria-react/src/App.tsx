import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LibroCard from './components/LibroCard'
import './App.css'

function App() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false)

  const libros = [
    {
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      precio: 12500,
      imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/75/23/75237f2f609042d9713cb03b681c77c1.jpg'
    },
    {
      titulo: '1984',
      autor: 'George Orwell',
      precio: 15000,
      imagen: 'https://covers.openlibrary.org/b/isbn/9788499890944-L.jpg'
    },
    {
      titulo: 'Rayuela',
      autor: 'Julio Cortázar',
      precio: 18000,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Rayuela_JC.png'
    }
  ]

  return (
    <>
      <Navbar />

      <header className="hero text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Bienvenido a la Librería
          </h1>

          <p className="lead">
            Descubrí miles de libros y encontrá tu próxima lectura favorita.
          </p>

          <button
            className="btn btn-primary btn-lg"
            onClick={() => setMostrarMensaje(!mostrarMensaje)}
          >
            Me gusta
          </button>

          {mostrarMensaje && (
            <p className="mt-3">
              Gracias por apoyar nuestra librería 💙
            </p>
          )}
        </div>
      </header>

      <main className="container my-5">
        <h2 className="text-center mb-4">Libros destacados</h2>

        <div className="row g-4">
          {libros.map((libro) => (
            <div className="col-md-4" key={libro.titulo}>
              <LibroCard
                titulo={libro.titulo}
                autor={libro.autor}
                precio={libro.precio}
                imagen={libro.imagen}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App