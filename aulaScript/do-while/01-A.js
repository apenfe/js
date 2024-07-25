'use strict'

/*
pedir que se introduzca una A, si se introduce otra cosa repetir
*/

var letra;

do{

    letra = prompt("Inserte la letra A: ");

    if(letra != "A"){
        alert("Debe insertar la A");
    }

}while(letra!='A');