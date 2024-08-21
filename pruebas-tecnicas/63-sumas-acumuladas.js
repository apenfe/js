/*

Enunciado Ejercicio 63:
Crea una función para conseguir las sumas acumuladas de una array de numeros
 
Ejemplos:
sumasAcumuladas([1, 2, 3, 4])   // [1, 3, 6, 10] 
 
(se calcula como: [1, 1+2, 1+2+3, 1+2+3+4])
*/

function sumasAcumuladas(numeros){

    let salida = [];

    let acumulada= 0;

    for(let i = 0; i<numeros.length; i++){

        acumulada += numeros[i];
        salida.push(acumulada);

    }

    return salida;

}

let resultado = sumasAcumuladas([1, 2, 3, 4])   // [1, 3, 6, 10] 
console.log(resultado);

