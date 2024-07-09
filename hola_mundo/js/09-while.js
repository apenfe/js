'use strict'

// bucle while

var year = 2018;

while(year <= 2051){
    console.log("Estamos en el año "+year);
    year++;
}

var year = 2018;

do{
    console.log("Estamos en el año "+year);
    year++;
}while(year<=2051);

var i=0;

do{

    console.log("El contador es: "+i);
    if(i==10){
        console.log("Saliendo del bucle en 10.");
        break;
    }

    i++;
    
}while(true);