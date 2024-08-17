/*

Enunciado Ejercicio 39:
Dado un número crea una función que genere todas las combinaciones
de parentesis válidas.
 
Ejemplos:
combinacionesParentesis(3);
 
Devuelve:
[
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
]
*/

function combinacionesParentesis(numero){

    let resultados = [];

    if(numero < 1){
        return resultados;
    }

    generarParentesis('', numero, numero, resultados);

    return resultados;

}

// contador ejecuciones recursivas
let contadorEjecucionesRecursivas = 0;

// funcion recursiva
function generarParentesis(combinacion, abiertos, cerrados, resultados){

    if(abiertos === cerrados && cerrados === 0){
        resultados.push(combinacion);
        return true;
    }

    if(abiertos > 0){
        generarParentesis(combinacion + '(', abiertos-1, cerrados, resultados);
    }

    if(cerrados > 0 && abiertos < cerrados){
        generarParentesis(combinacion + ')', abiertos, cerrados-1, resultados);
    }

    contadorEjecucionesRecursivas++;
    console.log("Ejecucion: ", contadorEjecucionesRecursivas, combinacion, resultados)

}

console.log(combinacionesParentesis(5));