'use strict'

// funciones anonimas
// es una funcion que no tiene nombre

var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}

console.log(pelicula("hola"));

// callback

function sumame(num1,num2,sumaYmuestra,sumaPorDos){

    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

// funciones flecha

sumame(5,7, function(dato){
    console.log("La suma es: "+dato);
},
function(dato){
    console.log("La suma por dos es: "+(dato*2));
});

sumame(5,7, dato => {
    console.log("La suma es: "+dato);
},
dato => {
    console.log("La suma por dos es: "+(dato*2));
});