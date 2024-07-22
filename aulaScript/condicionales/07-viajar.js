'use strict'

/*
Este programa te ayuda a viajar.
 El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús.
  Si va en tren o autobus le recordará que lleve dinero para el billete.
*/

var medio = prompt("coche, tren, bici, bus: ");

if(medio == "tren" || medio == "bus"){
    console.log("Lleve dinero encima");
}