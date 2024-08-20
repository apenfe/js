/*
 
Enunciado Ejercicio 52:
Dado un array de arrays, unir todos los arrays en uno solo
sin usar la función flat o concat de javascript
solo con estructuras de control y funciones basicas de arrays
 
Ejemplos:
const numeros = [  
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
 
limpiarNumeros(numeros);
 
Devuelve: 
[1, 2, 3, 4, 5, 6, 7, 8, 9]
 
*/

function limpiarNumeros(matriz){

    let salida = [];

    matriz.forEach(fila => {

        fila.forEach(num => {

            salida.push(num);

        });
        
    });

    return salida;

}

const numeros = [  
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

let num = limpiarNumeros(numeros);
console.log(num);