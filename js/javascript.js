function calcular() {
    let primerNro = parseInt(prompt("Ingresa primer Nro"))
    let segundoNro = parseInt(prompt("Ingresa el segundo Nro"))
    let operador = prompt("Selecciona operacion {+, -, *, /}")
    console.log("Resultado", realizarCalculo(primerNro, segundoNro, operador))
}
function realizarCalculo(num1, num2, ope) switch(ope) {
    case "+":
        return num1 + num2
    case "-":
        return num1 - num2
    case "*":
        return num1 * num2
    case "/":
        return num1 / num2
    default:
        return "Error, sos flor de puto" 
}