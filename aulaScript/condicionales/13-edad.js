'use strict'

/*
En ste caso, también usando el perador ternario o if reducido,
un visitante a la página deberá teclear su edad, si es igual o
mayor de 18 recibirá el mensaje de "Entra" en caso contario deberá 
decirle los años que tiene que estperar para entrar
*/

var edad, mensaje;

edad = parseInt(prompt("Teclea tu edad: "));

mensaje = (edad >= 18) ? "Entra": "Espera "+ (18-edad)+" años";

console.log(mensaje);