'use strict'

/*
Este script debe escribir la tabla de multiplicar del número que el usuario teclee. 
La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
*/

var numero = 8;
var mensaje = "";

for(let i = 0; i<=10; i++){
    mensaje += numero +" x "+i+" = "+(numero*i) + "\n";
}

alert(mensaje);