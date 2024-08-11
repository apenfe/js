/*
 
Enunciado Ejercicio 19:
Crea una función que simule el lanzamiento de dos dados.
 
Ejemplos:
dados();
 
*/

function dados(){

    let dado_1 = Math.floor(Math.random() * (6-1) + 1);
    let dado_2 = Math.floor(Math.random() * (6-1) + 1);

    console.log(dado_1 + dado_2);

}

dados();