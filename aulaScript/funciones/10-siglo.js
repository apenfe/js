'use strict'

/*
Escibe una función que devuelva el siglo al que correponde un año que se 
la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200....
*/

function siglo(year){

    var siglo = parseInt((year - 1)/100) + 1;
    return siglo;

 }

 var year = parseInt(prompt("Inserta año completo: "));
 alert("Pertenece al siglo " + siglo(year));