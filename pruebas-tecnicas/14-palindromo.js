/*
 
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
 
*/

function esPalindromo(palabra){

    var reversa = "";

    for(let i = palabra.length-1; i>=0; i--){
        console.log(palabra[i]);
        reversa += palabra[i];
    }

    if(reversa == palabra){
        return true;
    }

    return false;

}

console.log(esPalindromo("otto")); // Devuelve: true
console.log(esPalindromo("victor")); // Devuelve: false