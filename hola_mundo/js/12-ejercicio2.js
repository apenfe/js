'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los nuemros introducidos
hasta introducir un numero negativo y ahí mostrar el resultado
*/

var entrada = 0;
var suma = 0;
var media = 0;
var numeros = 0;

while(entrada>=0){

    entrada = parseFloat(prompt("Inserte un nuevo numero: ",0));

    if(isNaN(entrada)){
        entrada=0;
    }

    if(entrada<0){
        break;
    }
    suma += entrada;
    numeros ++;
    media = suma / numeros;

}

alert("La suma es: "+suma+ ". Y la media es: "+media)