/*
Enunciado Ejercicio 37:
Crea dos funciones que comprueben si dado un array de números,
todos ellos son pares.
 
Una función usando metodos del lenguaje y otra solo usando estructuras de control.
 
Ejemplos:
todosPares([1, 2, 3, 4]); // false
todosPares([2, 6, 8, 12]); // true
*/

function todosParesv1(numeros){

    for(let i = 0; i<numeros.length; i++){

        if(numeros[i] % 2 != 0){

            return false;

        }

    }

    return true;

}

function todosParesv2(numeros){
    return numeros.every(numero => numero % 2 === 0);
}

console.log(todosParesv1([1, 2, 3, 4]));
console.log(todosParesv1([2, 6, 8, 12]));

console.log(todosParesv2([1, 2, 3, 4]));
console.log(todosParesv2([2, 6, 8, 12]));

