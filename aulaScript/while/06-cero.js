'use strict'

/*
En este script se pedirá al usuario que teclee un número cada vez. 
El proceso acaba cuando teclee un 0 en cuyo caso además mostrará 
la suma de todos los números tecleados.
*/

var num = -1;

var sum=0;

while(num!=0){

    num = parseInt(prompt("Inserte un numero: "));

    if(num!=0){
        sum += num;
    }

}

console.log("La suma total es de: "+sum);