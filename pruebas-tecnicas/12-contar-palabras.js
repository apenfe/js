/*
 
Enunciado Ejercicio 12:
Crea un programa que cuente las palabras de un texto
 
Ejemplos:
contarPalabras("El perro de san roque no tiene el rabo 
porque es un perro muy muy malo");
 
Devuelve:
{
  el: 2,
  perro: 2,
  de: 1,
  san: 1,
  roque: 1,
  no: 1,
  tiene: 1,
  rabo: 1,
  porque: 1,
  es: 1,
  un: 1,
  muy: 2,
  malo: 1
}
*/

function contarPalabras(frase){

    let salida = "";
    frase = frase.toLowerCase();
    let palabras = frase.split(" ");
    let vistas = [];

    for(let palabra = 0; palabra < palabras.length; palabra++){

        var visitada = false;

        for(let j = 0; j < vistas.length; j++){

            if(vistas[j] == palabras[palabra]){
                visitada = true;
                break;
            }

        }

        if(!visitada){

            var count = 0;

            for(let i = 0; i< palabras.length; i++){

                if(palabras[palabra] == palabras[i]){

                    if(count == 0){

                        vistas.push(palabras[palabra]);

                    }

                    count++;
                }
    
            }

            salida += palabras[palabra]+": "+count+'\n';

        }

    }

    return salida;

}

var solucion = contarPalabras("El perro de san roque no tiene el rabo porque es un perro muy muy malo");

console.log(solucion);