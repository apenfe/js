/*
 
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

function sumarDos(array, numero){

    let solucion = [];

    for(let i=0; i<array.length; i++){

        for(let j=0; j<array.length; j++){
            
            if(array[i] + array[j] == numero && i != j){

                solucion.push(array[i]);
                solucion.push(array[j]);
                return solucion;

            }

        }

    }

    return null;

}

console.log(sumarDos([3, 7, 8, 2], 10));
console.log(sumarDos([4, 5, 9, 1], 10));
console.log(sumarDos([1, 2, 3, 4], 5));
