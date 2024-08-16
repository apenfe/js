/*
 
Enunciado Ejercicio 33:
Crea una función a la cual le pase un string y lo convierta 
a un listado en un objeto que cuente el número de elementos.
 
Las palabras no deben incluir guiones ni guiones bajos.
 
Ejemplos:
contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"); 
 
Devuelve: 
{ pc: 1, ordenador: 2, computadora: 1, consola: 1, ps5: 1, theLastOfUs: 1 }
*/

function contarElementos(texto){

    const regex = /[-_]/gi;
    var palabras = texto.replaceAll(regex,"").split(" ");
    var resultado = {};

    palabras.forEach((palabra) => {

        resultado[palabra] = (resultado[palabra] || 0) + 1;
        
    });

    return resultado;

}

let salida = contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"); 
console.log(salida);