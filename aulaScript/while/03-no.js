'use strict'

/*
Un script que preguntará al usuario si desea continuar con el programa. 
Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará. 
Cualquier otra entrada repetirá la pregunta
*/

while(true){

    var letra = prompt("¿Desea continuar?");

    if(letra == 'N' || letra.toLocaleLowerCase() == 'n'){
        break;
    }else{
        console.log("Debe de pulsar n");
    }
}