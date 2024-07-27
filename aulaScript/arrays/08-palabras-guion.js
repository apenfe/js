'use strict'

/*
Escribe una función qeu reciba como argumento un array y que 
devuelva una cadena de caracteres formada por los elementos 
del array separados por un guión
*/

function guiones(array){

    let salida = "";

    for(let i=0; i<array.length;i++){

        if(i==array.length-1){
            salida += array[i];
        }else{
            salida += array[i]+" - ";
        }
      
    }

    return salida;

}

alert(guiones(["rojo", "verde", "azul"]));