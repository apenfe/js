/*
 
Enunciado Ejercicio 21:
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]
 
*/

function generarMatriz(numero){

    var matriz = [];
    var contador = 1;

    for(let i = 0; i<numero; i++){

        var fila = [];

        for(let j = 0; j<numero; j++){
            
            fila.push(contador);
            contador++;

        }

        matriz.push(fila);

    }

    return matriz;

}

var matrix = generarMatriz(4);

console.log(matrix);