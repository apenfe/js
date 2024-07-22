'use strict'

/*
Este script pide al usuario que teclee una letra entre A, B, C, D. 
Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado,
 en caso contrario le dirá que se equivocó.
*/

var letra = prompt("Inserte una de las letras (A, B, C o D): ");

letra = letra.toLocaleLowerCase();

if(letra === "a"){
    console.log("has acertado.");
}else{
    console.log("has fallado.");
}