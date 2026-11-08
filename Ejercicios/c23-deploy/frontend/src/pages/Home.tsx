import { useState } from 'react'
import './Home.css'

function Home() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false)

  return (
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
  )
}

export default Home;