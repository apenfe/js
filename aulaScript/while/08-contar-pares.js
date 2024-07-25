'use strict'

/*
Este script le pide al usuario que vaya tecleando números una y otra vez, 
pero solo números pares, en caso de que teclee un número impar el programa 
acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).
*/

var contador = 0;

while(true){

    var num = parseInt(prompt("Inserte el numero: "));

    if(num % 2 != 0){
        break;
    }

    contador++;
}

console.log("Se han insertado "+contador+" numeros pares.");