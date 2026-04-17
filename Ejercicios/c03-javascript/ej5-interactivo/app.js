const input = document.getElementById("numero");
const boton = document.getElementById("generar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    const valor = input.value;
    if (valor === "" || valor < 1) {
        resultado.textContent = "Por favor, ingresa un número válido (mayor a 0).";
        return;
    }
    let salida = "";
    for (let i = 1; i <= valor; i++) {
        salida += "*".repeat(i) + "\n";
    }
    resultado.textContent = salida;
});