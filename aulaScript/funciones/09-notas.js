'use strict'

/*
En esta función se trata de convertir notas a calificaciones literales
de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bine, 
el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula.
*/

function nota(nota){

    if(nota >= 0 && nota<5){
        return "suspenso";
    }else if(nota>=5 && nota<=10){
        return "aprobado";
    }else{
        return "nota no valida";
    }
}

console.log(nota(5));