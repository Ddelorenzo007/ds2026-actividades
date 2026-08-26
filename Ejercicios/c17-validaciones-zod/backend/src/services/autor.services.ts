import { prisma } from "../config/prisma";

/**
 * Recupera todos los autores registrados.
 * 
 * @returns Promesa con el listado de autores.
 */
export const findAll = async () => {
  return await prisma.autor.findMany();
};

/**
 * Recupera un autor específico por su identificador.
 * 
 * @param id Identificador único del autor.
 * @returns Promesa con el objeto del autor o null si no se encuentra.
 */
export const findById = async (id: number) => {
  return await prisma.autor.findUnique({
    where: { id },
  });
};

/**
 * Registra un nuevo autor.
 * Lanza excepción P2002 si los datos violan restricciones de unicidad.
 * 
 * @param data Objeto con la información del autor.
 * @returns Promesa con el registro creado.
 */
export const create = async (data: any) => {
  return await prisma.autor.create({
    data,
  });
};

/**
 * Modifica los datos de un autor existente.
 * Lanza excepción P2025 si el identificador no existe.
 * Lanza excepción P2002 si los nuevos datos violan restricciones (ej: nombre duplicado).
 * 
 * @param id Identificador único del autor a modificar.
 * @param data Objeto con las propiedades a actualizar.
 * @returns Promesa con el registro actualizado.
 */
export const update = async (id: number, data: any) => {
  return await prisma.autor.update({
    where: { id },
    data,
  });
};

/**
 * Elimina un autor de la base de datos.
 * Lanza excepción P2003 si el autor posee libros dependientes (política Restrict).
 * Lanza excepción P2025 si el autor no existe.
 * 
 * @param id Identificador único del autor a eliminar.
 * @returns Promesa con el registro eliminado.
 */
export const remove = async (id: number) => {
  return await prisma.autor.delete({
    where: { id },
  });
};