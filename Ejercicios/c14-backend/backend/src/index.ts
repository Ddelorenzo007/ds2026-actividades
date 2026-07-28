import express from "express";
import { libros } from "./data/libros";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería — ¡hola desde un container! 🐳" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  precio: number;
  imagen: string;
  disponible: boolean;
}

interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
}

const autores: Autor[] = [
  { id: 1, nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { id: 2, nombre: "Gabriel García Márquez", nacionalidad: "Colombia" },
  { id: 3, nombre: "Ernesto Sabato", nacionalidad: "Argentina" },
];

app.get("/libros", (req, res) => {
  const { disponible } = req.query;
  if (disponible == undefined) {
    res.json(libros);
    return;
  } else if (disponible || disponible === "false") {
    res.json(libros.filter(libro => libro.disponible === (disponible === "true")));
  } else {
    res.json(libros);
  }
});

app.get("/autores", (_req, res) => {
  res.json(autores);
});