const input = document.getElementById("input") as HTMLInputElement
const buscar = document.getElementById("buscar") as HTMLButtonElement
const resultados = document.getElementById("resultados") as HTMLDivElement
const errorP = document.getElementById("error") as HTMLParagraphElement

interface LibroOL {
    title:string;
    author_name?:string[];
    first_publish_year?:number;
}

async function buscarLibros(q: string): Promise<LibroOL[]> {
    const url = `https://openlibrary.org/search.json?q=${q}`;

    const response = await fetch (url)

    if (!response.ok){
        throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.docs;
}

function mostrarLibros(libros:LibroOL[]){
    resultados.innerHTML="";
    libros.slice(0,10).forEach(libro => {
        const div = document.createElement("div");

        const titulo = libro.title;
        const autor = libro.author_name?.[0] || "Autor desconocido";
        const anio = libro.first_publish_year || "Año desconocido";

        div.innerHTML=`
        <h3>${titulo}</h3>
        <p>${autor}</p>
        <p>${anio}</p>
        <hr/>`;

        resultados.appendChild(div);
    });
}

buscar.addEventListener("click", async() => {
    const q = input.value.trim();

    if (!q) {
        errorP.textContent="Ingresa algo para buscar";
        return;
    }

    try {
        errorP.textContent="";

        const libros = await buscarLibros(q);
        mostrarLibros(libros);
    } catch (e){
        console.error(e);
        errorP.textContent="Error al buscar libros";
    }
})