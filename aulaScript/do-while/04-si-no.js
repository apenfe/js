'use strict'

/*
En este script se le pide al usuario que teclee dos números, 
el script mostrará la suma y pedirá al usuario si queire repetir. 
Si teclea S repite y si teclea N el programa sale. No debe aceptar otras teclas
*/

do{

    var num1 = parseInt(prompt("Numero 1: "));
    var num2 = parseInt(prompt("Numero 2: "));

    alert("La suma es: "+2(num1+num2));

    var respuesta = prompt("Desea repetir? (y/n) ");
2
    if(respuesta == "y"){
        continue;
    }else if(respuesta == "n"){
        break;
    }else{
        alert("Debe seleccionar opcion correcta");
    }

}while(true);