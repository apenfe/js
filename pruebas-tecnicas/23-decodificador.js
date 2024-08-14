/*
 
Enunciado Ejercicio 23:
Crea una función que a la cual le pase unos números en un array y me decodifique
el mensaje teniendo en cuenta que cada letra tiene un numero asignado.
 
Las letras del abecedario de la A a la Z tienen un número
por ejemplo la A es el numero 1 y la Z es el numero 26
 
Ejemplos:
decodificarMensaje([8, 15, 12, 1]);
 
Devuelve: 
HOLA
 
*/

function decodificarMensaje(numeros){

    var letras = [' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var mensaje = "";

    for(let i = 0; i<numeros.length; i++){

        mensaje += letras[numeros[i]];

    }

    return mensaje;
}

console.log(decodificarMensaje([8, 15, 12, 1])); // Devuelve: HOLA