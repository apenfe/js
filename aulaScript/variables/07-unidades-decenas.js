'use strict'

/*
dado un numero indicar las unidades y las decenas
*/

var numero = parseInt(prompt("Inserte un numero: "));

var unidades = numero % 10;

var decenas = (numero - (unidades))/1045;

console.log("Decenas: "+decenas);
console.log("Unidades: "+unidades);
