'use strict'

var nombres = ['adrian','lucia','mario',52,true];

var lenguajes = new Array('php','laravel');

console.log(nombres);
console.log(lenguajes);

console.log(nombres[2]);

console.log(nombres.length);

var elemento = parseInt(prompt("que elemento del array quieres: ",0));

if(elemento>=nombres.length){
    alert("introduce el numero correcto");
}else{
    alert(nombres[elemento]);
}

document.write("<h1>Lenguajess de programacion del 2018</h1>");

document.write("<ul>")
for(var i = 0; i<lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>")

// for each

document.write("<h1>Lenguajess de programacion del 2019</h1>");

document.write("<ul>")

lenguajes.forEach((element,indice)=>{
    document.write("<li>"+indice+"- "+element+"</li>");
});

document.write("</ul>");

// for in

document.write("<h1>Lenguajess de programacion del 2019</h1>");

document.write("<ul>");

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");

// busuedas en un array

var busqueda = lenguajes.find(lenguaje => lenguaje == "php");
console.log(busqueda);

var indiceBusqueda = lenguajes.findIndex(lenguaje => lenguaje == "php");
console.log(indiceBusqueda);

var precios = [10,20,50,80,12];
var algun = precios.some(precio => precio >= 81);
console.log(algun);
