'use strict'

/*
Escribe una función que reciba como argumento un precio y el porcentaje de impuestos. 
La función devolverá el valor total a pagar, teniendo en cuenta que al precio sin 
impuestos se le descuenta un porcentaje del 10% si es mayor de 100 euros.
*/

function descuento(precio, descuento){

    var des = precio * (descuento/100);

    return precio - des;
}

console.log("Precio final: "+descuento(100,10));