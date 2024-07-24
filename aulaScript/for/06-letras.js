'use strict'

/*
Este script el usuario deberá teclear una letra y un número, y el programa mostrará 
una cadena formada por la letra repetida el número que haya tecleado.
*/

var letra = 'u';
var veces = 5;
var salida = "";

for(let i=1 ; i<=veces ; i++){
    salida += letra;
}

console.log(salida);