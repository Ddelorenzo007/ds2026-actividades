import { Request, Response, NextFunction } from "express";
import * as autoresService from "../services/autor.services";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const autores = await autoresService.findAll();
    return res.json(autores);
  } catch (error) {
    next(error);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const autor = await autoresService.findById(Number(req.params.id));
    if (!autor) return res.status(404).json({ error: "Autor no encontrado" });
    return res.json(autor);
  } catch (error) {
    next(error);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const nuevo = await autoresService.create(req.body);
    return res.status(201).json(nuevo);
  } catch (error) {
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const actualizado = await autoresService.update(Number(req.params.id), req.body);
    if (!actualizado) return res.status(404).json({ error: "Autor no encontrado" });
    return res.json(actualizado);
  } catch (error) {
    next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const borrado = await autoresService.remove(Number(req.params.id));
    if (!borrado) return res.status(404).json({ error: "Autor no encontrado" });
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
}