const input = document.getElementById("numero") as HTMLInputElement;
const boton = document.getElementById("generar") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLElement;

function generarAsteriscos(n: number): string {
    let salida: string = "";
    for (let i = 0; i < n; i++) {
        salida += "*".repeat(i) + "\n";
    }
    return salida;
}

boton.addEventListener("click", () => {
    const valor: number = Number(input.value);
    if (isNaN(valor) || valor < 0) {
        resultado.textContent = "Por favor, ingresa un número válido (mayor a 0).";
        return;
    }
    resultado.textContent = generarAsteriscos(valor);
});