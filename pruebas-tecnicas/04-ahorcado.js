'use strict'

/*
 
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/

function juegoDelAhorcado(palabraSecreta){

    let vidas = 5;
    let aciertos = 0;
    var mostrar = [];

    for(let i = 0; i<palabraSecreta.length; i++){

        mostrar[i] = "_";
    }

    do{

        let letra = prompt("Adivina una letra:");

        var encontrado = false;

        for(let i = 0; i<palabraSecreta.length; i++){

            if(palabraSecreta[i] == letra && mostrar[i] == "_"){

                mostrar[i] = letra;
                encontrado = true;
                break;

            }

        }

        alert("La palabra es: "+mostrar);

        if(!encontrado){
            vidas--;

            if(vidas == 0){
                alert("Ahorcado!");
                return false;
            }

        }else{
            aciertos++;

            if(aciertos == palabraSecreta.length){
                alert("Has ganado el juego!");
                return true;
            }
        }

        alert("Tequedan: "+vidas+" vidas.");

    }while(vidas > 0);

}

juegoDelAhorcado('adrian');