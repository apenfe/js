'use strict'

/*
Un tienda vende monitores, teclados y ratones. Los precios se almacenan 
en una estructura array conde cada elemento es un par producto - precio.

Diseña una función que reciba como argumento el nombre de un producto 
(minúscula) y devuelva su precio.
*/

var productos = [['teclado', 8],['raton',3],['pantalla', 90]];

var producto = "raton";

producto = producto.toLowerCase();

for(let i=0; i<productos.length;i++){

    if(productos[i][0]==producto){
        alert("Este día se encarga "+productos[i][1]);
    }
}