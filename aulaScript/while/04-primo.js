'use strict'

/*
Determinar si el número que teclea el usuario es primo o no. 
Recordar que un número primo es el que solo puede dividirse 
por si mismo y por la unidad.
*/

let resto, divisor = 2;

var esPrimo;
var numero = parseInt(prompt("Teclear un numero entero: "));

while ((divisor <= numero) && (numero % divisor != 0)){
   divisor++;
}

if(divisor < numero){
   esPrimo=" NO ";
}else{
    esPrimo = " Si";
}

console.log("El numero "+ numero + esPrimo+" es primo");