/*
 
Enunciado Ejercicio 48:
Dado un array eleva al cubo todos sus numeros y devuelve la mitad de 
cada uno.
 
Ejemplos:
elevaMitad([1, 2, 3, 4])  //Devuelve: [ 0.5, 4, 13.5, 32 ]

*/

function elevaMitad(numeros){

    let salida = [];

    numeros.forEach(element => {
        salida.push((element**3)/2);
    });

    return salida;

}

let salida = elevaMitad([1, 2, 3, 4])  //Devuelve: [ 0.5, 4, 13.5, 32 ]

console.log(salida);