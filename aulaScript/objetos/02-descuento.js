'use strict'

/*
Define un objeto, mediante una expresión, que tenga dos propiedades: 
precio y descuento y un método neto. El método calculará el precio con 
el descuento aplicado. Los valores se pedirán por teclado

Por ejemplo objeto vestido, precio 400 y descuento 10. 
El método devolverá como resultado 360 (400 - 10*400/100).
*/

var dato;

var vestido = {

   precio: 0,
   descuento: 0,
   neto: function(){ 

         return this.precio*(1 - this.descuento / 100);

    }

}

vestido.precio = parseInt(prompt("Precio bruto: "));
vestido.descuento = parseInt(prompt("Descuento: "));
console.log("El precio neto es "+vestido.neto()+"€");