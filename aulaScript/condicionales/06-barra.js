'use strict'

/*
Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, 
para ello el cliente puede pedir vino, cerveza, refresco, agua.
 Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.
*/

var articulo = prompt("Puede elegir: vino, cerveza, otros");

if ( articulo === "vino" || articulo === "cerveza"){
      alert("vaya a la barra");
}else{
      alert("vaya a la tienda");
}

