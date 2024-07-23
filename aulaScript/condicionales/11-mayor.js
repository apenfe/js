'use strict'

/*
introducir dos numeros y decir cual es el mayor
*/

var num1 = parseFloat(prompt("inserte el primer numero: "));
var num2 = parseFloat(prompt("inserte el segundo numero: "));

if(num1 > num2){
    console.log("El primer numero es mayor que el segundo");
}else if(num2 > num1){
    console.log("El primer numero es mayor que el segundo");
}else{
    console.log("Los nuemros son iguales");
}
