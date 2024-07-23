'use strict'

/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15%
*/

var total = 150;

if(total < 300){
    console.log("descuento 0");
}else if(total >= 100 && total <= 300){
    console.log("descuento 5");
}else if(total > 300 && total <= 500){
    console.log("descuento 10");
}else if(total > 500){
    console.log("descuento 15");
}else{
    console.log("no es una cantidad valida");
}