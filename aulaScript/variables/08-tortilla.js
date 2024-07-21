'use strict'

/*
Una tortilla de patatas lleva 200 gramos de patatas por persona. 
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias
*/

var comensales = 5;

var patatas = (200 * comensales)/1000;

var huevos = (patatas * 5) ;

var cebolla = (patatas * 300) ;

console.log("Se necesitaran: "+patatas+" kg de patatas, "+huevos+" huevos "+cebolla+" gr de cebolla.");