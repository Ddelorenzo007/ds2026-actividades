import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import type libroCardProps from '../types/libroCardProps';
import './LibroCard.css'

function LibroCard({
  id,
  titulo,
  autor,
  precio,
  imagen
}: libroCardProps) {

  return (
    <Card className="h-100 shadow-sm">

      <Card.Img
        variant="top" src={imagen} className="libro-img"/>

      <Card.Body>
        <Card.Title>{titulo}</Card.Title>

        <Card.Text>{autor}</Card.Text>

        <Card.Text>${precio.toFixed(2)}</Card.Text>

       <Button
          as={Link as any}
          to={`/catalogo/${id}`}
          variant="outline-primary"
        >
          Ver más
        </Button>
      </Card.Body>

    </Card>
  );
}

export default LibroCard;