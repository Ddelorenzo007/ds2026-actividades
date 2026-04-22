"use strict";
// Enganchar los botones: 
// - Solo disponibles → renderizar(librosDisponibles()). 
// - Ver todos → renderizar(catalogo). 
// Al cargar la página, mostrar todos los libros por defecto. 
// Traspilar: tsc app.ts 
// Abrir en el navegador y probar los tres botones.
const input = document.getElementById("filtroAutor");
const botonFiltrar = document.getElementById("filtrar");
const botonDisponibles = document.getElementById("mostrarDisponibles");
const botonTodos = document.getElementById("mostrarTodos");
const listado = document.getElementById("listado");
const stats = document.getElementById("stats");
const catalogo = [
    { isbn: "1", titulo: "El Principito", autor: "Saint-Exupéry", precio: 10, disponible: true },
    { isbn: "2", titulo: "1984", autor: "Orwell", precio: 15, disponible: false },
    { isbn: "3", titulo: "Rayuela", autor: "Cortázar", precio: 20, disponible: true },
    { isbn: "4", titulo: "Ficciones", autor: "Borges", precio: 18, disponible: true }
];
function buscarPorAutor(autor) {
    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter(libro => libro.disponible);
}
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    let suma = 0;
    for (let libro of libros) {
        suma += libro.precio;
    }
    return suma / libros.length;
}
function renderizar(libros) {
    listado.innerHTML = "";
    for (let libro of libros) {
        const li = document.createElement("li");
        li.textContent = (`${libro.titulo} - ${libro.autor} - $${libro.precio}`);
        listado.appendChild(li);
    }
    stats.textContent = `Cantidad: ${libros.length} | Promedio: $${precioPromedio(libros)}`;
}
botonFiltrar.addEventListener("click", () => {
    renderizar(buscarPorAutor(input.value));
});
botonDisponibles.addEventListener("click", () => {
    renderizar(librosDisponibles());
});
botonTodos.addEventListener("click", () => {
    renderizar(catalogo);
});
renderizar(catalogo);
