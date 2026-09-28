import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod"; // <-- Cambiamos AnyZodObject por ZodSchema

/**
 * Valida el cuerpo (body) de la petición HTTP contra un esquema definido.
 */
export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "Datos de entrada inválidos.",
          detalles: error.issues, // <-- Usamos .issues en lugar de .errors
        });
      }
      next(error);
    }
  };
};

/**
 * Valida los parámetros de la URL (params) contra un esquema definido.
 */
export const validateParams = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validParams = schema.parse(req.params);
      
      // En vez de sobreescribir el objeto (lo que rompe el tipado de Express),
      // inyectamos los valores validados (ej: IDs convertidos a número) al objeto original.
      Object.assign(req.params, validParams);
      
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "Parámetros de ruta inválidos.",
          detalles: error.issues, // <-- Usamos .issues
        });
      }
      next(error);
    }
  };
};