import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './LibroCard.css'

type LibroCardProps = {
  titulo: string
  autor: string
  precio: number
  imagen: string
}

function LibroCard({
  titulo,
  autor,
  precio,
  imagen
}: LibroCardProps) {

  return (
    <Card className="h-100 shadow-sm">

      <Card.Img
        variant="top" src={imagen} className="libro-img"/>

      <Card.Body>
        <Card.Title>{titulo}</Card.Title>

        <Card.Text>{autor}</Card.Text>

        <Card.Text>${precio.toFixed(2)}</Card.Text>

        <Button variant="outline-primary">
          Ver más
        </Button>
      </Card.Body>

    </Card>
  );
}

export default LibroCard;