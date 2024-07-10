'use strict'

// parametros REST y SPREAD

function listadoFrutas(fruta1,fruta2, ...resto_frutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log("Resto de frutas: "+resto_frutas);
}

listadoFrutas("manzana","pera","mango","papaya","platano","fresa");

var frutas = ["manzana","pera"];
listadoFrutas(...frutas,"duriam","fresa");