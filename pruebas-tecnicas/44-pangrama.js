/*
 
Enunciado Ejercicio 44:
Crea una función que detecte si un string es un pangrama o no.
 
Un pangrama es una frase que incluye todas las letras del abecedario.
 
Ejemplos:
esPangrama("El pequeño jabato erizo se balanceaba sobre la rama del fatidico árbol.") // true
esPangrama("Hola soy Víctor Robles") // false
*/

function esPangrama(frase){

    frase = frase.toUpperCase();
   
    frase = frase.normalize('NFD').replace(/[\u0300-\u036f]/g,"");

    const letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let contador = 0;

    for(let i=0; i<letras.length; i++){

        if(frase.indexOf(letras[i]) >=0 ){
            contador++
            console.log(contador + " letra: "+letras[i]);
        }
    }

    console.log(contador);
    if(contador == letras.length){
        return true;
    }

    return false;

}

console.log(esPangrama("El pequeño jabato erizo y el gato se balanceaba sobre la rama del fatidico árbol el dia de hoy, pesaba 3000 kilos vwx.")); // true
console.log(esPangrama("Hola soy Víctor Robles")); // false
