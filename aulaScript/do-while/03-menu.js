'use strict'

/*
En este script vas a crear un menu con tres opciones: 
escribir, leer, salir. El usuario elegirá una opción y 
en un alert se le indicará la opción elegida. El programa 
vuelve a mostrar el menu y se repite el proceso. 
El script acabará cuando se pulse la opción de salir.
*/

do{

    alert("1- Escribir.\n2- Leer\n3- Salir.");
    var opcion = prompt("Seleccione una opcion: ");

    if(opcion == 1){
        alert("escribir");
    }else if(opcion == 2){
        alert("Leer");
    }else if(opcion == 3){
        alert("Salir");
        break;
    }else{
        alert("opcion incorrecta");
    }

}while(true);