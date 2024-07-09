'use strict'

// pruebas con let y var

// prueba con var
// var funciona como global
var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero=50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// prueba con let
// con let se actua a nivel bloque, es la variable mas parecida a java
var texto = "curso js";
console.log(texto); 

if(true){
    let texto = "Curso js y laravel";
    console.log(texto);
}

console.log(texto);