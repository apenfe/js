'use strict'

/*
Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales 
cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar 
sabiendo el número de artículos y el precio de cada uno.
*/

var numeroArticulos = 20;
var precio = 50;
const DESCUENTO = 15;
var final;

if(numeroArticulos>=10 && precio >=40){
    final = (precio * numeroArticulos) - (precio * numeroArticulos * (DESCUENTO/100));
}

console.log(final);