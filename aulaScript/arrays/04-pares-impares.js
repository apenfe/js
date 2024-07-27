'use strict'

/*
Diseña un script que vaya leyendo números y guardándolos en un array. 
Una vez lleno mostrará el array y deberá decir cuantos números son pares 
y cuantos son impares. La entrada de datos termina cuando el usuario teclea 
0 o un valor no numérico.

Intenta resolverlo sin usar métodos del objeto array, solo indices y 
longitudes de arrays.

No debe aceptar valores no numéricos (isNaN(valor) permite detectar 
valores no numéricos).

Por ejemplo si tecleo: 3,5,4,6,7,8, 11el script me dirá que el array de 
entrada es [3,5,4,6,7,8, 11] y que hay 3 pares y 4 impares.
*/

var numeros = [];
var pares;
var impares;

do{

    var numero = parseInt(prompt("Inserte un numero: "));

    if(isNaN(numero) || numero==0){

        for(let i = 0; i<numeros.length; i++){

            if(numeros[i] % 2 == 0){
                pares ++;
            }else{
                impares++;
            }

        }

        break;

    }else{

        numeros.push(numero);

    }

}while(true);

console.log("Pares: "+pares+", impares: "+impares);