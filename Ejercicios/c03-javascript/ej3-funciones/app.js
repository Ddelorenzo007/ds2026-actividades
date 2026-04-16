const calcularPrecioFinal = (monto, medioPago) => {
    if (monto <200){
        return monto;
    } else if (monto <= 400){
        switch (medioPago) {
            case "E":
                return monto * 0.7;
            case "D":
                return monto * 0.8;
            case "C":
                return monto * 0.9;
            default:
                return "Medio de pago inválido";
        }
    }else {
        return monto * 0.6;
    } 
};

console.log(`Monto: $150 | Pago: Efectivo | Final: $${calcularPrecioFinal(150, "E")}`);
console.log(`Monto: $200 | Pago: Débito | Final: $${calcularPrecioFinal(200, "D")}`);
console.log(`Monto: $450 | Pago: Efectivo | Final: $${calcularPrecioFinal(450, "E")}`);
console.log(`Monto: $300 | Pago: Crédito | Final: $${calcularPrecioFinal(300, "C")}`);
console.log(`Monto: $400 | Pago: Efectivo | Final: $${calcularPrecioFinal(400, "E")}`);