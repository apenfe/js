'use strict'

/*
Este script muestra un menu de opciones: 

1- Leer datos. 
2- Mostrar datos 
3- Fin. 

El usuario deberá teclear uno de ellos y el programa mostrará la opción elegida. 
Si teclea un valor fuera del menu se mostrará un mensaje de error y se vuelve a 
pedir un número de opción. El programa finaliza al teclear el 3.
*/

while(true){

    alert("1- Leer datos.\n2- Mostrar datos\n3- Fin.");
    var opcion = prompt("Seleccione una opcion: ");

    if(opcion == 1){
        alert("leer datos");
    }else if(opcion == 2){
        alert("mostrar datos");
    }else if(opcion == 3){
        alert("fin");
        break;
    }else{
        alert("opcion incorrecta");
    }

}