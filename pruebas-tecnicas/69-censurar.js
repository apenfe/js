/*
 
Enunciado Ejercicio 69:
Crea una función que dado un texto, sea capaz de censurar palabras.
 
Ejemplos:
censurar("Texto de prueba", "texto") // ***** de prueba
 
*/

function censurar(texto, palabra){

    let censura = "*".repeat(palabra.length);

    texto = texto.toLowerCase().replaceAll(palabra, censura);

    console.log(texto);

}

censurar("Texto de prueba", "texto");