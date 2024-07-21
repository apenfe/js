'use strict'

/*
Teiens que escribir un programa que intercambie el valor de dos variables.
 Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera. 
 No vale usar arrays ni asignación múltiple
*/

var uno = 1;
var dos = 2;

var cambio = uno;

uno = dos;
dos = cambio;

console.log("uno: "+uno+" y dos: "+dos);