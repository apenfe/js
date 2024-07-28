'use strict'

/*
Para implementar un grupo de alumnos de un curso se crea una lista de objetos alumno. 
Cada objeto alumno se caracteriza por el nombre del alumno, su número de matrícula y 
su calificacion.

El objeto tiene un método para poner la calificación: calificar(nota).

Crea el script para implementar  un grupo de 4 alumnos.
*/

class Alumno{

    constructor(nombre,matricula){

        this.nombre=nombre;
        this.matricula=matricula;
        this.calificacion=0;

    }

    calificar = function(nota){
        this.calificacion = nota;
    }

}

var alumnos = [];

for(let i=0; i<4; i++){

    let nombre = prompt("nombre: ");
    let matricula = parseInt(prompt("matricula: "));

    let actual = new Alumno(nombre,matricula);

    let nota = parseFloat(prompt("nota: "));
    actual.calificar(nota);

    alumnos.push(actual);

}