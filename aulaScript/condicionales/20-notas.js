'use strict'

/*
En este ejercicio el script convertirá las notas numéricas de un examen en paabras: 0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente.
*/

var nota = 8.4;

if(nota >= 0 && nota < 5){
    nota = "suspenso";
}else if(nota >= 5 && nota < 7){
    nota = "aprobado";
}else if(nota >= 7 && nota < 9){
    nota = "notable"; 
}else if(nota >= 9 && nota <= 10){
    nota = "sobresaliente"; 
}else{
    nota = "no valida";
}

console.log(nota);