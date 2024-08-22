/*
 
Enunciado Ejercicio 61:
Dado una cadena de números, devuelve todas las combinaciones de letras posibles 
que el número podría representar.
 
Ejemplos:
combinacionesLetras("23")
 
Devuelve:
["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 
*/

function combinacionesLetras(numero){

    let resultados = [''];

    for(const digito of numero){

        for(let i= 0, longitud = resultados.length; i<longitud;i++){

            const elementoAnterior = resultados.shift();

            for(const letra of mapeo[digito]){
                console.log(digito, resultados);
                resultados.push(elementoAnterior +letra)
            }

        }

    }

    return resultados;

}

const mapeo = [
    ' ', // 0
    '', // 1
    'abc', // 2
    'def', // 3
    'ghi', // 4
    'jkl', // 5
    'mno', // 6
    'pqrs', // 7
    'tuv', // 8
    'wxyz' // 9
  ];

let resul = combinacionesLetras("234");
console.log(resul);