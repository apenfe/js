/*
 
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
*/

function permutacion(numeros){

    numeros.sort();
   
    if(numeros.length.toString() == numeros[numeros.length-1]){

        console.log(numeros[numeros.length-1]);

    }else{

        for(let i= 0; i<numeros.length; i++){

            if(numeros[i+1] != numeros[i]+1){

                console.log(numeros[i]+1);
                break;

            }

        }

    }

}

permutacion([1, 2, 3, 5, 4]);   // Devuelve: 5
permutacion([1, 2, 3, 5]);     // Devuelve: 4
 