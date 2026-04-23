const input = document.getElementById("filtroAutor") as HTMLInputElement;
const botonFiltrar = document.getElementById("filtrar") as HTMLButtonElement;
const botonDisponibles = document.getElementById("mostrarDisponibles") as HTMLButtonElement;
const botonTodos = document.getElementById("mostrarTodos") as HTMLButtonElement;
const listado = document.getElementById("listado") as HTMLUListElement;
const stats = document.getElementById("stats") as HTMLParagraphElement;

const form = document.getElementById("formLibro") as HTMLFormElement;
const inputTitulo = document.getElementById("titulo") as HTMLInputElement;
const inputAutor = document.getElementById("autor") as HTMLInputElement;
const inputPrecio = document.getElementById("precio") as HTMLInputElement;
const inputGenero = document.getElementById("genero") as HTMLInputElement;
const inputDisponible = document.getElementById("disponible") as HTMLInputElement;
const errorForm = document.getElementById("errorForm") as HTMLDivElement;

interface Libro{
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

let catalogo: Libro[] = [
    { isbn: "1", titulo: "El Principito", autor: "Saint-Exupéry", precio: 10, disponible: true },
    { isbn: "2", titulo: "1984", autor: "Orwell", precio: 15, disponible: false },
    { isbn: "3", titulo: "Rayuela", autor: "Cortázar", precio: 20, disponible: true },
    { isbn: "4", titulo: "Ficciones", autor: "Borges", precio: 18, disponible: true }
];

function buscarPorAutor(autor: string): Libro[] {
    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(libro => libro.disponible);
}

function precioPromedio(libros: Libro[]): number {
    if (libros.length === 0) return 0;
    
    let suma = 0;
    for (let libro of libros){
        suma += libro.precio
    }

    return suma/libros.length;
}

function renderizar(libros: Libro[]): void{
    listado.innerHTML="";

    for (let libro of libros){
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

botonFiltrar.addEventListener("click", () =>{
    renderizar(buscarPorAutor(input.value))
});

botonDisponibles.addEventListener("click", () =>{
    renderizar(librosDisponibles())
}); 

botonTodos.addEventListener("click", () =>{
    renderizar(catalogo)
});

renderizar(catalogo)

function agregarLibro(libro: Libro): void {
    catalogo.push(libro);
    renderizar(catalogo);
}

function eliminarLibro(isbn: string): void {
    catalogo = catalogo.filter(libro => libro.isbn !== isbn);
    renderizar(catalogo);
}

function validarFormulario(): Libro | null {
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

    if(!libro){
        errorForm.textContent = "Error: Complete todos los campos";
        return;
    }

    errorForm.textContent = "";
    agregarLibro(libro);
    form.reset();

});