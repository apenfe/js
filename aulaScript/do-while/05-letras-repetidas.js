'use strict'

/*
Usar un bucle do..while para crear una cadena que contenga letras repetidas. 
Las letras se entran por teclado y solo podrán ser la X o la Z despues de 
elegir las letras se le ingresa el número de repeticiones que deberá estar entre 1 y 15.
*/

let letra='', veces=0, cadena='';

do{

    letra = prompt("¿Qué letra desea X o la Z?");

}while (letra != 'X' && letra != "Z");

do{

   veces = parseInt(prompt("¿Cuantas repeticiones (1-15)?"));

}while (veces <1 || veces > 15)

do{

    cadena+=letra;
    veces--;

}while (veces>0);

alert(cadena);