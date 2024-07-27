'use strict'

/*
Sin usar métodos del objeto array, diseña una función llamada sumaLista() 
capaz de sumar todos los números que forman el array que se le pase como argumento.
*/

function sumarLista(array){

    var suma= 0;

    for(let i = 0; i<array.length; i++){
        suma += array[i];
    }

    return suma;
}

var datos = [ 2,5,2,1];

console.log(sumarLista(datos));