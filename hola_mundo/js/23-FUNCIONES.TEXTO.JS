'use strict'

// transformacion de textos
var numero = 444;
var texto = " Bienvenido al curso de javascript curso de victor robles";
var texto2 = "es muy buen curso";

var dato = numero.toString();

dato = texto.toLowerCase();

console.log(dato);

// calcular la longitud
var nombre = "1234";
var array = [1,2,5];

console.log("longitud del texto: "+nombre.length);
console.log("longitud del array: "+array.length);

// concatenaciones 

var textoTotal = texto +" "+ texto2;
textoTotal = texto.concat(" "+texto2);

console.log(textoTotal);

console.log("-----------------BUSQUEDAS-----------------");

var busqueda = texto.indexOf("curso");
busqueda = texto.lastIndexOf("curso");

console.log(busqueda);

var busqueda2 = texto.match(/curso/g);
console.log(busqueda2);

var corte = texto.substring(15,20); // inicio y final del indice
console.log(corte);

var letra = texto.charAt(15);
console.log(letra);

var empiezaPor = texto.startsWith(" Bien");
console.log(empiezaPor);

var incluye = texto.includes("javascript");
console.log(incluye);