"use strict";
const input = document.getElementById("filtroAutor");
const botonFiltrar = document.getElementById("filtrar");
const botonDisponibles = document.getElementById("mostrarDisponibles");
const botonTodos = document.getElementById("mostrarTodos");
const listado = document.getElementById("listado");
const stats = document.getElementById("stats");
const form = document.getElementById("formLibro");
const inputTitulo = document.getElementById("titulo");
const inputAutor = document.getElementById("autor");
const inputPrecio = document.getElementById("precio");
const inputGenero = document.getElementById("genero");
const inputDisponible = document.getElementById("disponible");
const errorForm = document.getElementById("errorForm");
let catalogo = [
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
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => {
            eliminarLibro(libro.isbn);
        });
        li.appendChild(btnEliminar);
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
function agregarLibro(libro) {
    catalogo.push(libro);
    renderizar(catalogo);
}
function eliminarLibro(isbn) {
    catalogo = catalogo.filter(libro => libro.isbn !== isbn);
    renderizar(catalogo);
}
function validarFormulario() {
    const titulo = inputTitulo.value.trim();
    const autor = inputAutor.value.trim();
    const precio = parseFloat(inputPrecio.value);
    const genero = inputGenero.value.trim();
    const disponible = inputDisponible.checked;
    if (titulo === "" || autor === "" || isNaN(precio) || precio <= 0 || genero === "") {
        return null;
    }
    return {
        isbn: "AUTO-" + Date.now(),
        titulo,
        autor,
        precio,
        disponible,
        genero
    };
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const libro = validarFormulario();
    if (!libro) {
        errorForm.textContent = "Error: Complete todos los campos";
        return;
    }
    errorForm.textContent = "";
    agregarLibro(libro);
    form.reset();
});
