'use strict'

/*
Escribe una función que determina si la letra que se le pasa como 
argumento se encuentra contenida dentro de un array de letras que 
se le pasa como segundo argumento.

Se trata de resolverlo sin usar métodos del objeto array, solo el 
dato tipo array.

existeEn('a', ['w','e','r','i']) devolverá false porque la letra 'a'
no existe en el array
*/

function buscaLetra(letra, array){

    for(let i=0; i<array.length;i++){

        if(array[i]===letra){

            return true;

        }

    }

    return false;

}

if(buscaLetra('a', ['w','e','r','i'])){
    alert("Esta en el array.");
}else{
    alert("NO esta en el array.");
}