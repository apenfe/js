/*
 
Enunciado Ejercicio 49:
Crea una función que dado un array de números devuelva el número 
más pequeño de la matriz.
 
No puedes ordenar el array, solo usar estructuras de control.
 
Ejemplos:
elMasPequenio([8,9,99,88,77,1,12,13,6,7])  // Devuelve: 1

*/

function elMasPequenio(numeros){

    let menor = numeros[0];

    for(let i = 1; i < numeros.length; i++){

        if(numeros[i] < menor){

            menor = numeros[i];

        }

    }

    return menor;

}

let menor = elMasPequenio([8,9,99,88,77,1,12,13,6,7])  // Devuelve: 1

console.log(menor);