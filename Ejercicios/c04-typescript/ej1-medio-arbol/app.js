"use strict";
const input = document.getElementById("numero");
const boton = document.getElementById("generar");
const resultado = document.getElementById("resultado");
function generarAsteriscos(n) {
    let salida = "";
    for (let i = 0; i < n; i++) {
        salida += "*".repeat(i) + "\n";
    }
    return salida;
}
boton.addEventListener("click", () => {
    const valor = Number(input.value);
    if (isNaN(valor) || valor < 0) {
        resultado.textContent = "Por favor, ingresa un número válido (mayor a 0).";
        return;
    }
    resultado.textContent = generarAsteriscos(valor);
});
