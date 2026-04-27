"use strict";
const cargando = document.getElementById("cargando");
const errorDiv = document.getElementById("error");
const lista = document.getElementById("lista");
async function obetenerUsuarios() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
}
async function cargarUsuarios() {
    try {
        cargando.style.display = "block";
        errorDiv.textContent = "";
        const usuarios = await obetenerUsuarios();
        lista.innerHTML = "";
        usuarios.forEach(u => {
            const li = document.createElement("li");
            li.textContent = (`${u.name} - ${u.email}`);
            lista.appendChild(li);
        });
    }
    catch (error) {
        errorDiv.textContent = "Error al cargar usuarios";
    }
    finally {
        cargando.style.display = "none";
    }
}
cargarUsuarios();
