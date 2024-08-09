/*
 
Enunciado Ejercicio 15:
Dada un array de palabras, crear una función que lo devuelva ordenado
por la longitud de sus palabras de menor a mayor
 
Ejemplos:
ordenarPorLongitud([
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]);
 
*/

function ordenarPorLongitud(array){

    var salida = [];

    while(array.length > 0){

        var maxima = 0;

        for(let j = 0; j<array.length; j++){

            if(array[j].length > array[maxima].length){

                maxima = j;

            }

        } 

        salida.push(array[maxima]);
        array.splice(maxima,1);

    }

    return salida;

}

var ordenado = ordenarPorLongitud(["Hola","soy","Víctor Robles","como","estas","hoy","amigo","yo","voy","a","estudiar","ahora"]);

console.log(ordenado);