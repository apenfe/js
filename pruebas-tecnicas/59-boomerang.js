/*
 
Enunciado Ejercicio 59:
Crea una función que retorne el número total de bumeranes de un 
array de números enteros e imprima cada uno de ellos.
 
Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, 
en el que el primero y el último son iguales, y el segundo es diferente. 
Por ejemplo [2, 1, 2].
 
Ejemplos:
contrarBumeranes([2, 1, 2, 3, 3, 4, 2, 4])
 
Devuelve:
Hay 2 bumeranes: [[2, 1, 2], [4, 2, 4]]
 
*/

function contrarBumeranes(numeros){

    let salida = [];

    for(let i=0; i<numeros.length-2;i++){

        let actual = numeros[i];
        let segundo = numeros[i+1];
        let tercero =  numeros[i+2];
        
        if(actual == tercero && tercero != segundo){

            salida.push([actual, segundo, tercero]);

        }

    }

    return salida;

}

let resultado = contrarBumeranes([2, 1, 2, 3, 3, 4, 2, 4]);

console.log(resultado);