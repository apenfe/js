/*
 
Enunciado Ejercicio 57:
Crea una función que convierta cualquier frase a una SEO slug.
 
Una seo slug es un fragmento de url optimizado para posicionamiento web:
cursos-de-victor-robles-web
 
Ejemplos:
transformarURL("Cursos de Victor Robles WEB");
 
Devuelve:
cursos-de-victor-robles-web
 
*/

function transformarURL(texto){

    texto = texto.toLowerCase();

    texto = texto.replaceAll(" ","-");

    return texto;

}

let seo = transformarURL("Cursos de Victor Robles WEB");

console.log(seo);

