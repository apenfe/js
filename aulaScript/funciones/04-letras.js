'use strict'

/*
Definir una función que cree una cadena de letras repetidas tantas veces como le digamos. 
La función recibe dos argumentos: la letra y el número de repeticiones.
*/

function letras(letra, veces){

    let salida = "";

    for(let i = 0; i<=veces; i++){
        salida += letra;
    }

    return salida;
}