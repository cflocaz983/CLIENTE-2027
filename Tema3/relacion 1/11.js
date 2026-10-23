/*Realizar la búsqueda de un string clave en un string fuente. Se deberá ingresar una
    frase o texto (fuente) y luego la clave a buscar. En caso de encontrarla, imprimir la
    posición, de lo contrario una leyenda.*/
let fuente = prompt("Ingrese un texto o frase:");
let clave = prompt("Ingrese la clave a buscar:");
let posicion = fuente.toLowerCase().indexOf(clave.toLowerCase());

if (posicion !== -1) {
  alert("La clave se encontró en la posición: " + posicion);
} else {
  alert("La clave no se encontró en el texto.");
}
