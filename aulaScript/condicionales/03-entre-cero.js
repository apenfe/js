'use strict'

/*
En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo,
 pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
*/

var num1 = parseInt(prompt("Inserte el primer numero: "));
var num2 = parseInt(prompt("Inserte el segundo numero: "));

if (num2 == 0){
    console.log("no se puede dividir entre 0");
}else{
    console.log(num1/num2);
}