'use strict'

/*
Crea una clase Ficha, con su constructor, que se usará para almacenar el número 
de kilómetros recorridos por una persona en cada sesión de ejercicios. 
Las propiedades de la clase serán:
    nombre
    sesiones
    numsesioens

El nombre es el de la persona, en los sesiones se almacenará el número de 
kilometros recorridos en cada sesión y numsesiones contiene el número de 
sesiones anotadas.

Tiene dos métodos:

    anotar: anota los kilómetros
    media: calcula la media de kilómetros recorridos

Cada persona tendrá su ficha construída con esta clase.

Si ejecuto anotar(8), anotar(10), anotar(6), en las sesiones se anotarán 8, 10, 6.

Si escribo media() devolverá 8 ((8+10+6)/3).

En la solución se usa el camino má primitivo posible: arrays y bucles básicos
*/

class Ficha{

    constructor(nombre){
        this.nombre = nombre;
        this.sesiones = [];
        this.numSesiones = 0;
    }

    anotar = function(km){

        this.sesiones.push(km);
        this.numSesiones ++;

    }

    media = function(){

        let suma = 0;

        for(let i = 0; i<this.numSesiones; i++){
            suma += this.sesiones[i];
        }

        return suma / this.numSesiones;

    }

}

var abril = new Ficha("adrian");

abril.anotar(8);
abril.anotar(10); 
abril.anotar(6);

alert("La media es: "+ abril.media());
