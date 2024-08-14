/*
 
Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
 
*/

function invertirTexto(texto){

    var salida = "";

    for(let i = texto.length-1; i>=0 ; i--){
        salida += texto[i];
    }

    console.log(salida);
}

invertirTexto("Hola");