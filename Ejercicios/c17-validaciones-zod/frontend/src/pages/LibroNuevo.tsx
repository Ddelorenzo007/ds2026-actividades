import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type  libroCardProps from '../types/libroCardProps';


// 1. Schema de Zod
export const libroSchema = z.object({
  titulo: z.string().trim().min(1, 'El título es obligatorio'),
  autor: z.string().trim().min(1, 'El autor es obligatorio'),
  precio: z.number().positive('El precio debe ser mayor a 0'),
  disponible: z.boolean()
});

// Tipo inferido automáticamente del schema
export type LibroValidado = z.infer<typeof libroSchema>;

const IMG_PLACEHOLDER = 'https://placehold.co/300x400?text=Libro';

interface Props {
  onAgregar: (libro: libroCardProps) => void;
}

function LibroNuevo({ onAgregar }: Props) {
  const navigate = useNavigate();

  // 2. Configuración de React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm<LibroValidado>({
    resolver: zodResolver(libroSchema)
  });

  // 3. Manejador del submit (solo se ejecuta si la validación es exitosa)
  const onSubmit = (data: LibroValidado) => {
    onAgregar({
      id: Date.now(),
      titulo: data.titulo,
      autor: data.autor,
      precio: data.precio,
      imagen: IMG_PLACEHOLDER,
      disponible: data.disponible,
    });
    
    navigate('/catalogo');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="container py-4" style={{ maxWidth: 480 }}>
      <h2>Nuevo libro</h2>

      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>
        <Form.Control
          {...register('titulo')}
          isInvalid={!!errors.titulo}
        />
        <Form.Control.Feedback type="invalid">
          {errors.titulo?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Autor</Form.Label>
        <Form.Control
          {...register('autor')}
          isInvalid={!!errors.autor}
        />
        <Form.Control.Feedback type="invalid">
          {errors.autor?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          {...register('precio', { valueAsNumber: true })}
          isInvalid={!!errors.precio}
        />
        <Form.Control.Feedback type="invalid">
          {errors.precio?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Check
        className="mb-3"
        label="Disponible"
        {...register('disponible')}
      />

      <Button type="submit">Agregar libro</Button>
    </Form>
  );
}

export default LibroNuevo;