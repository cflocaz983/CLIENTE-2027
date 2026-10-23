/*
Cargar un String por teclado e implementar las siguientes funciones:
IES JAROSO
Desarrollo Web Entorno Cliente
TEMA 3
Relación 1 : EJERCICIOS TEMA 3: OBJETOS PREDEFINIDOS EN JAVASCRIPT
a) Imprimir la primera mitad de los caracteres de la cadena.
b) Imprimir el último carácter.
c) Imprimirlo en forma inversa.
d) Imprimir cada carácter del String separado con un guion.
e) Imprimir la cantidad de vocales almacenadas
*/
/*a) Imprimir la primera mitad de los caracteres de la cadena.*/
let cadena = prompt("Ingrese un texto o frase:");
let mitad = Math.floor(cadena.length / 2);
alert("La primera mitad de la cadena es: " + cadena.substring(0, mitad));
console.log(`La primera mitad de la cadena es: ${cadena.substring(0, mitad)}`);
/*b) Imprimir el último carácter.*/
alert(
  "El último carácter de la cadena es: " + cadena.charAt(cadena.length - 1),
);
console.log(
  `El último carácter de la cadena es: ${cadena.charAt(cadena.length - 1)}`,
);
/*c) Imprimirlo en forma inversa.*/
let cadenaInvertida = cadena.split("").reverse().join("");
alert("La cadena invertida es: " + cadenaInvertida);
console.log(`La cadena invertida es: ${cadenaInvertida}`);
/*d) Imprimir cada carácter del String separado con un guion.*/
let cadenaConGuiones = cadena.split("").join("-");
alert("La cadena con guiones es: " + cadenaConGuiones);
console.log(`La cadena con guiones es: ${cadenaConGuiones}`);
/*e) Imprimir la cantidad de vocales almacenadas*/
let cantidadVocales = 0;
for (let i = 0; i < cadena.length; i++) {
  let caracter = cadena.charAt(i).toLowerCase();
  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    cantidadVocales++;
  }
}
alert("La cantidad de vocales en la cadena es: " + cantidadVocales);
console.log(`La cantidad de vocales en la cadena es: ${cantidadVocales}`);
