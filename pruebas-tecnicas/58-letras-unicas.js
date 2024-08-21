/*
 
Enunciado Ejercicio 58:
Crea una función que tome una cadena de caracteres como argumento 
y devuelva una nueva cadena que contenga únicamente las letras 
únicas de la cadena original. 
 
Las letras deben aparecer en el mismo orden en que se 
encontraron en la cadena original.
 
Ejemplos:
letrasUnicas("Hola soy Victor Robles WEB")
 
Devuelve:
Hola syVictrRbeWEB
 
*/

function letrasUnicas(frase){

    let encontradas = ""+frase[0];

    for(let i=1 ; i<frase.length; i++){

        if(encontradas.indexOf(frase[i]) == -1){
                encontradas += frase[i];
        }

    }

    return encontradas;

}

let resultado = letrasUnicas("Hola soy Victor Robles WEB");
console.log(resultado);

