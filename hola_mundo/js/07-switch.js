'use strict'

// switch

var edad = 18;
var mensaje = "";

switch(edad){

    case 18:
        mensaje = "mayoria de edad";
    break;

    case 25:
        mensaje = "eres un adulto";
    break;

    case 70:
        mensaje = "eres un anciano";
    break;

    default:
        mensaje = "otra edad...";
    break;

}

console.log(mensaje);