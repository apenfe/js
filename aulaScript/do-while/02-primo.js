'use strict'

/*
Este script usará un bucle do while para determinar si un número es primo o no. 
El numero tecleado deberá estar entre 0 y 100. Si es primo lo mostrará en una ventana alert.
*/

let numero, divisor=1, resto;

do{
    
    numero = parseInt(prompt("Entrar un número"));

}while (numero <=0 && numero >=100);

do{
    
    divisor++
    
    resto = numero%divisor;

}while (resto != 0 && divisor < numero);

if (resto ==0 && divisor != numero){

    alert(numero+" No es primo");

}else{

    alert(numero+ " Es primo");

}