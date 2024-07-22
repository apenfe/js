'use strict'

/*
En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos.
 Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, 
 si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.
*/

var longitud = 100;
var tiempo = 4;

var velocidad = longitud/tiempo;

if(velocidad>=40 && velocidad<=60){
    console.log("superas la prueba");
}else{
    console.log("no has superado la prueba");
}