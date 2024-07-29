'use strict'

/*
 
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/

var ordenarPorApellidos = [
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
];  

function ordenarApellidos(personas){

    // crear variable con nuevo array de apellidos

    var apellidos = personas.map(persona => persona.split(" ")[1]);

    // ordeno apellidos

    apellidos.sort();

    // uno nombre a los apellidos

    var orden = apellidos.map(apellido => {

        for(let i = 0; i<personas.length; i++){

            if(apellido == personas[i].split(" ")[1]){

                return personas[i].split(" ")[0] +" "+apellido;

            }

        }

    });
   

    return orden;

}

var ordenados = ordenarApellidos(ordenarPorApellidos);

for(let i = 0; i<ordenados.length; i++){

    alert(ordenados[i] + "\n");
    
}