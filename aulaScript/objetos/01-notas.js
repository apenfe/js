'use strict'

/*
crea un objeto con notas y luego recorrelo para hacer la media
*/

var notas = {
    nombre: "adrian",
    programacion: 10,
    bbdd: 10,
    poo: 9,
    sistemas: 8
}

var media = 0;
var total = 0;

for(let key in notas){

    if(typeof(notas[key]) == "number"){

        media += notas[key];
        total += 1;

    }

}

console.log(media/total);