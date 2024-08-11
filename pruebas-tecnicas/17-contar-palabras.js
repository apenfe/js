/*
 
Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12
 
*/


function contarPalabras(array){

    let palabras = 0;

    for(let frase = 0; frase < array.length; frase++){

        let palabras_actuales = array[frase].split(" ");

        palabras += palabras_actuales.length;

    }

    return palabras;

}

let palabras = contarPalabras(["Hola, soy Víctor Robles WEB","Me gusta programar","Y soy desarrollador web"]);
console.log(palabras);