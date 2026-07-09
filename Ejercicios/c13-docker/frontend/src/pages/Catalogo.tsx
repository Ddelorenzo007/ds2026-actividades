import LibroCard from '../components/LibroCard';
import type  LibroCardProps  from '../types/libroCardProps';
import '../assets/LibrosDestacados.css';
import { useFetch } from '../hooks/useFetch';
import { Spinner, Alert } from 'react-bootstrap';

function Libros() {

  const { data: libros, loading, error } = useFetch<LibroCardProps[]>('/libros.json');

  if (loading) return <Spinner animation="border" />;
  if (error)   return <Alert variant="danger">{error}</Alert>;

  return (
    <div className="container">
      <h2 className="titulo">Nuestros libros</h2>
        <div className="grid-libros">
          {(libros ?? []).map(libro => <LibroCard key={libro.id} {...libro} />)}
        </div>
    </div>
  );
}

export default Libros;