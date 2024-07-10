'use strict'

/*
1. PIDE 6 NUMEROS POR PANTALLA Y LOS METE EN UN ARRAY
2. MOSTRAR TODOS LOS ELEMENTOS EN EL CUERPO DE PAGINA Y CONSOLA
3. ORDENARLO Y MOSTRARLO
4. INVERTIR SU ORDEN Y MOSTRARLO
5. MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAT
6. BUSQUEDA DE UN VALOR INTRODUCIO POR EL USUARIO Y QIE NOS DIGA SI ESTA EN EL ARRAY Y SU INDICE
*/
function mostrarArray(numeros,texto=""){

    document.write("<h1>"+texto+"</h1>");
    document.write("<ul>");
    for(let indice in numeros){
    document.write("<li>"+numeros[indice]+"</li>");

}

document.write("</ul>");
}

const veces = 6;
var numeros = [];

for(let i=1; i<=veces; i++){
    var actual = parseInt(prompt("Inserte el "+i+"º elemento: ",0));
    numeros.push(actual);
}

console.log(numeros);
mostrarArray(numeros,"Contenido del array de numeros...");

numeros.sort();
mostrarArray(numeros,"Contenido del array de numeros ordenado...");

numeros.reverse();
mostrarArray(numeros,"Contenido del array de numeros ordenado inversamente...");

document.write("<h1>El array tiene "+numeros.length+" elementos</h1>");

var busqueda = parseInt(prompt("Inserte la busqueda: ",0));

var index =numeros.indexOf(busqueda);

if(index>=0){
    document.write("<h1>El array tiene el elemento "+busqueda+" en el indice "+index+"</h1>");
}