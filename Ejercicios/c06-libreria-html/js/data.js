const input = document.getElementById("input");
const buscar = document.getElementById("buscar");
const resultados = document.getElementById("resultados");
const errorP = document.getElementById("error");

async function buscarLibros(q) {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  return data.docs;
}

function mostrarLibros(libros) {
  resultados.innerHTML = "";

  if (libros.length === 0) {
    resultados.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning text-center">
          No se encontraron libros.
        </div>
      </div>
    `;
    return;
  }

  libros.slice(0, 12).forEach(libro => {
    const titulo = libro.title || "Título desconocido";
    const autor = libro.author_name?.[0] || "Autor desconocido";
    const anio = libro.first_publish_year || "Año desconocido";

    const portada = libro.cover_i
      ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
      : "https://via.placeholder.com/300x400?text=Sin+portada";

    const div = document.createElement("div");
    div.className = "col-md-4";

    div.innerHTML = `
      <div class="card h-100">
        <img src="${portada}" class="card-img-top" alt="${titulo}">

        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>

          <p class="card-text">
            <strong>Autor:</strong> ${autor}
          </p>

          <p class="card-text">
            <strong>Año:</strong> ${anio}
          </p>

          <a href="libro.html" class="btn btn-outline-primary">
            Ver más
          </a>
        </div>
      </div>
    `;

    resultados.appendChild(div);
  });
}

async function ejecutarBusqueda() {
  const q = input.value.trim();

  if (!q) {
    errorP.textContent = "Ingresá algo para buscar.";
    resultados.innerHTML = "";
    return;
  }

  try {
    errorP.textContent = "";
    resultados.innerHTML = `
      <div class="col-12 text-center">
        <p>Buscando libros...</p>
      </div>
    `;

    const libros = await buscarLibros(q);
    mostrarLibros(libros);

  } catch (e) {
    console.error(e);
    errorP.textContent = "Error al buscar libros.";
    resultados.innerHTML = "";
  }
}

buscar.addEventListener("click", ejecutarBusqueda);

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    ejecutarBusqueda();
  }
});