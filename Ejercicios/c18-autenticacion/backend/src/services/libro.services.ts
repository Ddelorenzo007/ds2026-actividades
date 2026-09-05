import { prisma } from "../config/prisma";

/**
 * Recupera todos los libros almacenados en la base de datos.
 * Permite filtrar por disponibilidad si el parámetro es provisto.
 * 
 * @param disponible Filtro opcional de estado.
 * @returns Promesa con el listado de libros.
 */
export const findAll = async (disponible?: boolean) => {
  return await prisma.libro.findMany({
    where: {
      ...(disponible !== undefined && { disponible }),
    },
  });
};

/**
 * Recupera un libro específico por su identificador primario.
 * 
 * @param id Identificador único del libro.
 * @returns Promesa con el objeto del libro o null si no existe.
 */
export const findById = async (id: number) => {
  return await prisma.libro.findUnique({
    where: { id },
  });
};

/**
 * Persiste un nuevo libro en la base de datos.
 * 
 * @param data Objeto con la información validada del libro.
 * @returns Promesa con el registro creado.
 */
export const create = async (data: any) => {
  return await prisma.libro.create({
    data,
  });
};

/**
 * Modifica los datos de un libro existente.
 * Lanza excepción P2025 si el identificador no existe.
 * 
 * @param id Identificador único del libro a modificar.
 * @param data Objeto con las propiedades a actualizar.
 * @returns Promesa con el registro actualizado.
 */
export const update = async (id: number, data: any) => {
  return await prisma.libro.update({
    where: { id },
    data,
  });
};

/**
 * Elimina un libro del almacenamiento de forma permanente.
 * Lanza excepción P2025 si el identificador no existe.
 * 
 * @param id Identificador único del libro a eliminar.
 * @returns Promesa con el registro eliminado.
 */
export const remove = async (id: number) => {
  return await prisma.libro.delete({
    where: { id },
  });
};