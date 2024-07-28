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

function ordenarApellidos(){


}

var ordenados = ordenarApellidos(ordenarPorApellidos);

for(let i = 0; i<ordenados.length; i++){

    alert(ordenados[i] + "\n");
    
}