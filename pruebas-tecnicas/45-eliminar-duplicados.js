/*
 
Enunciado Ejercicio 45:
Dado un array de números, elimina los números duplicados.
 
Ejemplos:
eliminarDuplicados([1, 1, 2, 2, 3, 4, 5, 5, 5, 6])
 
// Devuelve:
[ 1, 2, 3, 4, 5, 6 ]
*/

function eliminarDuplicados(numeros){

    let salida = [numeros[0]];

    for(let i=1; i<numeros.length; i++){

        if(salida.indexOf(numeros[i]) >= 0){

            continue;

        }else{

            salida.push(numeros[i]);
            
        }

    }

    return salida;

}

let salida = eliminarDuplicados([1, 1, 2, 2, 3, 4, 5, 5, 5, 6]);

console.log(salida);