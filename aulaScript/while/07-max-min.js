'use strict'

/*
Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. 
En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.
*/

var num = -1;

var max = Number.MIN_VALUE * -1, min = Number.MAX_VALUE;

console.log(min*-10);

while(num!=0){

    num = parseInt(prompt("Inserte un numero: "));

    if(num!=0){

        if(num>max){
            max = num;
        }
        if(num<min){
            min = num;
        }

    }

}

console.log("El maximo es: "+max);
console.log("El minimo es: "+min);