'use strict'

/*
Diseña una función que calcule el factorial de un número, usa una función recursiva 
(que se llama a si misma). Recuerda que el factorial de un número es el resultado de 
multiplicar cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1
*/

function factorial(num){

    let factorial = 1;

    for(let i=1 ; i<=num; i++){
        factorial *= i;
    }

    return factorial;
}

console.log(factorial(5));