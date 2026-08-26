import { Request, Response, NextFunction } from "express";
import * as libroService from "../services/libro.services";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { disponible } = req.query;
    const filtro = disponible === undefined ? undefined : disponible === "true";
    const libros = await libroService.findAll(filtro);
    return res.json(libros);
  } catch (error) {
    next(error);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const libro = await libroService.findById(Number(req.params.id));
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    return res.json(libro);
  } catch (error) {
    next(error);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const nuevo = await libroService.create(req.body);
    return res.status(201).json(nuevo);
  } catch (error) {
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const actualizado = await libroService.update(Number(req.params.id), req.body);
    if (!actualizado) return res.status(404).json({ error: "Libro no encontrado" });
    return res.json(actualizado);
  } catch (error) {
    next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const borrado = await libroService.remove(Number(req.params.id));
    if (!borrado) return res.status(404).json({ error: "Libro no encontrado" });
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
}