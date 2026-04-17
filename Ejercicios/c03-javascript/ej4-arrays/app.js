const numeros = [9, 5, 7, 12, 8, 21, 12, 1, 17];

let sumaTotal = 0;
let menor = numeros[0];
let mayor = numeros[0];
for (const num of numeros){
    sumaTotal += num;
    if (num < menor){
        menor = num;
    }
    if (num > mayor){
        mayor = num;
    }
}
const promedio = sumaTotal / numeros.length;
console.log(`Suma total: ${sumaTotal}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Número mayor: ${mayor}`);
console.log(`Número menor: ${menor}`);

function generarAsteriscos(n) {
    let asteriscos = '';
    for (let i = 0; i < n; i++) {
        asteriscos += '*';
    }
    return asteriscos;
}