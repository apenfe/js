/*
 
Enunciado Ejercicio 60:
Programa que calcule el beneficio de un producto despues de restarle:
- 20% de descuento
- 21% de iva
- 15% de irpf
 
*/

function beneficio(precio){

    let descuento = precio * 0.2;
    precio = precio - descuento;

    let iva = precio * 0.21;
    precio = precio - iva;

    let irpf = precio * 0.15;
    precio = precio - irpf;

    return precio;

}

let benefici = beneficio(35);
console.log(benefici);