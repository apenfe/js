'use strict'

/*
El usuario debe entrar un número y su cuadrado. 
Si es correcto el script enviará un mensja ede acierto
en caso contrario dirá que se produjo un error.
*/

var num = parseFloat(prompt("inserte el numero: "));
var cuadrado = parseFloat(prompt("inserte el cuadrado del numero: "));

if(cuadrado == Math.pow(num,2)){
    console.log("Correcto");
}else{
    console.log("Error");
}