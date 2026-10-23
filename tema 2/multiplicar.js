// Función para imprimir la tabla de multiplicar de un número dado
function tablaDeMultiplicar(numero) {
  console.log("Tabla de multiplicar del " + numero + ":");

  // Usamos un bucle for para multiplicar el número dado por los números del 1 al 10
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
    document.write(numero + " x " + i + " = " + resultado + "<br>");
  }
}

// Probamos la función con un ejemplo
const numero = 6;
tablaDeMultiplicar(numero);
/* fumncion para sumar dos numeros */
// Declaración de una función que devuelve un valor
function sum(a, b) {
  return a + b;
}

// Llamada a la función y asignación del resultado a una variable
let result = sum(5, 3);
console.log(result); // Salida: 8
/* funcion flecha para sumar dos numeros */
const sumArrow = (a, b) => {
  return a + b;
};
/* funcion suma con flecha  sin return*/

const sumNoReturn = (a, b) => a + b;
console.log(sumNoReturn(5, 3)); // Salida: 8
document.write("La suma de 5 y 3 es: " + sumNoReturn(5, 3) + "<br>");
const resta = (a, b) => a - b;
console.log(resta(10, 4)); // Salida: 6
document.write("La resta de 10 y 4 es: " + resta(10, 4) + "<br>");
let array = [1, 2, 3, 4, 5];
let nuevoElemento = parseInt(
  prompt("Ingrese un número para agregar al array:"),
);
array.push(nuevoElemento);
console.log(array); // Salida: [1, 2, 3, 4, 5, nuevoElemento]
document.write("El array actualizado es: " + array + "<br>");
