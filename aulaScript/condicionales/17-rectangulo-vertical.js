'use strict'

/*
En este ejercicio el usuario entra la longitud de la base y el alto de un cuadrado. 
Si la base y el alto son idénticos la respuesta será "Es un cuadrado", si la base es 
mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".
*/

var longitudBase = parseInt(prompt("Inserta la longitud de la base: "));
var alto = parseInt(prompt("Inserte la altura del cuadrado: "));

if(longitudBase > alto){
    console.log("Es rectangulo horizontal");
}else if(alto > longitudBase){
    console.log("Es un rectangulo vertical");
}else{
    console.log("Es un cuadrado");
}