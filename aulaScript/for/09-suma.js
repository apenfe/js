'use strict'

/*
 Se trata de crear una aplicación que calcule la suma de 
 todos los números enteros positivos entre 0 y el número 
 tecleado por el usuario. El resultado será de la forma 
 "Los números enteros de 0 a n  suman suma"
*/

var num = 100;
var suma = 0;

for(let i= 0; i<=num; i++){
    suma+=i;
}

console.log("Los numeros enteros de 0 a "+num+" suman "+suma);