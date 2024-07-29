/*
 
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/

function sumaPares(array){

    let suma = 0;

    for(index in array){

        if(array[index] % 2 == 0){
            suma += array[index];
        }

    }

    return suma;

}

console.log(sumaPares([2,13,6,15]));