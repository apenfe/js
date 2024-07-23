'use strict'

/*
En una tienda coches se quiere redirigir a un cliente hacia una sección de acuerdo al tipo de coche que elija.
 Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficina
  200 y si elige eléctrico o 3 se le enviará a la oficina 300.
*/

var seccion = prompt("1-gasolina, 2-diesel, 3-electrico: ");
var oficina;

if(seccion == "gasolina" || seccion== "1"){
    oficina = 100;
}else if(seccion == "diesel" || seccion== "2"){
    oficina = 200;
}else if(seccion == "electrico" || seccion== "3"){
    oficina = 300;
}else{
    oficina = null;
}

if(oficina){
    console.log("oficina: "+oficina);
}else{
    console.log("seleccione una opcion correcta");
}