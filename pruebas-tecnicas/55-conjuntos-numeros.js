/*
 
Enunciado Ejercicio 55:
Dado un conjunto de enteros distintos, 
devuelve todos los subconjuntos posibles.
 
Ejemplos:
subconjuntos([1,2,3]);
 
Devuelve:
[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]
*/

function subconjuntos(numeros){

    let resultados = [[]];

    numeros.sort((a,b) => a-b);

    for(let i = 0 ; i<numeros.length; i++){ // recorrer todos los numeros

       const tamanio = resultados.length; // tamaño de la lista de subconjuntos

        // iterar sibconjunto actual
        for(let j = 0 ; j < tamanio; j++){

            console.log([...resultados[j], numeros[i]])
            resultados.push([...resultados[j], numeros[i]]);

        }

    }

    return resultados;

}

let resultado = subconjuntos([1,2,3]);
console.log(resultado);

