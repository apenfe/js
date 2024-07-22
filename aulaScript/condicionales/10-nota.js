'use strict'

/*
Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio.
 El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7.
*/

var primera = parseFloat(prompt("nota de 1º evaluacion: "));
var segunda = parseFloat(prompt("nota de 2º evaluacion: "));
var tercera = parseFloat(prompt("nota de 3º evaluacion: "));

var promedio = (primera +segunda +tercera)/3;

if(promedio < 5){
    console.log("suspenso");
}else if(promedio >=5 && promedio <=7){
    console.log("aprobado");
}else if(promedio > 7 && promedio <=10){
    console.log("notable");
}else{
    console.log("nota no valida");
}