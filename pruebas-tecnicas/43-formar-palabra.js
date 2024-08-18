/*
 
Enunciado Ejercicio 43:
Dada una colección de letras:
[
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]
 
Crea una función que me diga si la palabra que le paso como parametro 
se puede formar con las letras de la colección
 
Ejemplos:
puedeFormarPalabra('PERRO', coleccion)  // false
puedeFormarPalabra('CASO', coleccion)   // true
 
*/

let coleccion = ['A','B','C','D','Z','V','K','S','F','G','O','E'];

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

//console.log(puedeFormarPalabra('PERRO', coleccion));  // false
console.log(puedeFormarPalabra('CASO', coleccion));   // true