'use strict'

/*
Aprtir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.

Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño.
*/

var estacion = 4;

if(estacion == 1 || estacion==2 || estacion == 3 || estacion == 12){
    console.log("Es invierno");
}else if(estacion == 4 || estacion==5){
    console.log("Es primavera");
}else if(estacion == 6 || estacion==7 || estacion==8 || estacion==9){
    console.log("Es verano");
}else if(estacion == 10 || estacion==11){
    console.log("Es otoño");
}else{
    console.log("No es un mes valido");
}