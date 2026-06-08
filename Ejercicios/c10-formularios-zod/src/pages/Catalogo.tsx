import LibroCard from '../components/LibroCard';

  const libros = [
    {
        id: '1',
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      precio: 12500,
      imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/75/23/75237f2f609042d9713cb03b681c77c1.jpg'
    },
    {
        id: '2',
      titulo: '1984',
      autor: 'George Orwell',
      precio: 15000,
      imagen: 'https://covers.openlibrary.org/b/isbn/9788499890944-L.jpg'
    },
    {
        id: '3',
      titulo: 'Rayuela',
      autor: 'Julio Cortázar',
      precio: 18000,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Rayuela_JC.png'
    }
  ]


function Libros() {
  return (
    <section className="libros">
        <h2 className="text-center mb-4">Libros destacados</h2>
        <div className="row g-4">
          {libros.map((libro) => (
            <div className="col-md-4" key={libro.id}>
              <LibroCard
                  id={libro.id}
                titulo={libro.titulo}
                autor={libro.autor}
                precio={libro.precio}
                imagen={libro.imagen}
              />
            </div>
          ))}
        </div>
    </section>
  );
}

export default Libros;