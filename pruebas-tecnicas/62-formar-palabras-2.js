/*
 
Enunciado Ejercicio 62:
Dado un diccionario de letras disponibles:
[
   ['A','B','C','D'],
   ['S','V','C','S'],
   ['A','D','O','E']
 ]
 
 Crea una función que me diga si la palabra que le paso
 como parametro se puede formar con las letras del
 diccionario disponibles.
 
¡PERO OJO! Cada vez que se usa una letra, se eliminia del array.
 
Ejemplos:
puedeFormarPalabra('BESO', diccionario)   // true
puedeFormarPalabra('SOSO', diccionario)   // false   
 
*/

let coleccion = ['A','B','C','D','S','V','C','S','A','D','O','E'];

function puedeFormarPalabra(palabra, coleccion){

    palabra = palabra.toUpperCase();

    for(let i=0; i<palabra.length; i++){

        var is = false;

        for(let j=0; j<coleccion.length; j++){

            if(palabra[i] === coleccion[j]){
                is = true;
                coleccion[j]="0";
                console.log("esta");
            }
        
        }

        if(!is){
            return false;
        }

    }

    return true;

}

console.log(puedeFormarPalabra('BESO', coleccion));   // true
console.log(puedeFormarPalabra('SOSO', coleccion));  // false  