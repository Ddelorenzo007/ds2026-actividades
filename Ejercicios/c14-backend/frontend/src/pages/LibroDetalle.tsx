import { useParams, Link } from 'react-router-dom'

const libros = [
  {
    id: '1',
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    precio: 12500,
    imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/75/23/75237f2f609042d9713cb03b681c77c1.jpg',
    descripcion:
      'El Principito es una obra clásica de la literatura universal. Narra la historia de un pequeño príncipe que viaja por distintos planetas mientras aprende sobre la amistad, el amor, la soledad y el sentido de la vida.'
  },
  {
    id: '2',
    titulo: '1984',
    autor: 'George Orwell',
    precio: 15000,
    imagen: 'https://covers.openlibrary.org/b/isbn/9788499890944-L.jpg',
    descripcion:
      '1984 es una novela distópica que muestra una sociedad vigilada por un gobierno totalitario, donde la libertad individual y la verdad son constantemente manipuladas.'
  },
  {
    id: '3',
    titulo: 'Rayuela',
    autor: 'Julio Cortázar',
    precio: 18000,
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Rayuela_JC.png',
    descripcion:
      'Rayuela es una novela experimental de Julio Cortázar que permite distintas formas de lectura y explora temas como el amor, la búsqueda existencial y la vida urbana.'
  }
]

function DetalleLibro() {
  const { id } = useParams()

  const libro = libros.find((libro) => libro.id === id)

  if (!libro) {
    return (
      <main className="container my-5">
        <h2>Libro no encontrado</h2>

        <Link to="/catalogo" className="btn btn-secondary mt-3">
          Volver al catálogo
        </Link>
      </main>
    )
  }

  return (
    <main className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-5">
          <img
            src={libro.imagen}
            className="img-fluid rounded shadow"
            alt={libro.titulo}
          />
        </div>

        <div className="col-md-7">
          <h1 className="mb-3">{libro.titulo}</h1>

          <h4 className="text-muted mb-4">{libro.autor}</h4>

          <p>{libro.descripcion}</p>

          <h2 className="text-success my-4">
            ${libro.precio.toFixed(2)}
          </h2>

          <button className="btn btn-primary btn-lg me-2">
            Comprar
          </button>

          <Link to="/catalogo" className="btn btn-secondary btn-lg">
            Volver al catálogo
          </Link>
        </div>
      </div>
    </main>
  )
}

export default DetalleLibro