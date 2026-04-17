const input = document.getElementById("producto");
const btnAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

let total = 0;

btnAgregar.addEventListener("click", function() {
    if (input.value === "") return;

    const li = document.createElement("li");
    li.textContent = input.value + " ";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", function() {
        lista.removeChild(li);
        total--;
        contador.textContent = `${total} productos en la lista`;
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
    total++;
    contador.textContent = `${total} productos en la lista`;
    input.value = "";
});