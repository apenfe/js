'use strict'

// condicional if

var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("Edad 1 mayor que edad 2");
}else{
    console.log("Edad 2 mayor que edad 1");
}

var edad = 18;
var nombre = "David";

if (edad >= 18){
    console.log(nombre + " tiene "+ edad+ " años.");

    if(edad<=33){
        console.log("Todavía eres millenial");
    }else if (edad >= 70){
        console.log("Eres anciano.");
    }else{
        console.log("Ya no eres millenial.");
    }

}else{
    console.log(nombre + " es menor de edad.");
}

// operadores logicos

var year = 2018;

if(year!=2016){
    console.log("El año no es 2016.");
}

if(year>=2000 && year >= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

if(year == 2018 || year == 2008){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado");
}