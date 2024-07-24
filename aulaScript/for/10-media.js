'use strict'

/*
Programa un script que pida al usuario que teclee 4 números (uno cada vez). 
Con esos números el programa deberá calcular la media aritmética. 
O sea la suma de los 4 números dividida entre 4
*/

var numeros = [];

for(let i=0; i<4; i++){
    numeros[i]= parseInt(prompt("Inserte el numero "+(i+1)+": "));
}

var suma=0;

for(let i=0; i<4; i++){
    suma+=numeros[i];
}

console.log("La media es: "+(suma/numeros.length));
