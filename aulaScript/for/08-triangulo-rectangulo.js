'use strict'

/*
Se trata de dibujar un triángulo rectángulo con asteriscos. 
El usuario tecleará un valor entero, el programa escribirá 
con asteriscos tantas lineas como diga ese número. Cada linea 
estará formada por una serie de astericos tan larga como diga 
el número de línea en el que está.
*/

var numero = 20;
var salida = "";

for(let i=1; i<=numero; i++){

    for(let j=1; j<=i; j++){

        salida += "*";

    }

    salida += "\n";

}

console.log(salida);