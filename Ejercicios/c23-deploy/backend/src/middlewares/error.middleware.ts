import { Request, Response, NextFunction } from "express";

/**
 * Middleware global para la gestión de errores.
 * Intercepta las excepciones no controladas en los controladores y mapea 
 * los códigos de error específicos de Prisma a códigos de estado HTTP estándar.
 * 
 * @param err Excepción capturada.
 * @param req Objeto de petición Express.
 * @param res Objeto de respuesta Express.
 * @param next Función para pasar el control al siguiente middleware (requerido por la firma de Express).
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Verificamos si el error proviene de Prisma mediante la existencia de un código específico
  if (err && err.code) {
    switch (err.code) {
      case "P2002":
        // Violación de restricción única (Unique Constraint)
        return res.status(409).json({
          error: "Conflicto: Ya existe un registro con ese valor único en la base de datos.",
        });

      case "P2003":
        // Violación de llave foránea (Foreign Key Constraint)
        // Ocurre al insertar una relación inexistente o al intentar eliminar un registro con dependencias (Restrict).
        return res.status(409).json({
          error: "Conflicto: Violación de integridad referencial. Compruebe los datos relacionados.",
        });

      case "P2025":
        // Registro no encontrado (Record Not Found)
        // Ocurre en operaciones update o delete cuando el ID objetivo no existe.
        return res.status(404).json({
          error: "No encontrado: El registro solicitado no existe.",
        });
    }
  }

  // Fallback para errores no contemplados o internos del servidor
  console.error(`[Error no manejado] ${req.method} ${req.url}:`, err);
  
  return res.status(500).json({
    error: "Error interno del servidor. Contacte al administrador.",
  });
};