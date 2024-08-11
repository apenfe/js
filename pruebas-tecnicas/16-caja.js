/*
 
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********
 
*/

function mostrarTextoCaja(texto){

    let palabras = texto.split(" ");

    var max = 0;

    for(let i = 0; i<palabras.length; i++){

        if(palabras[i].length > max){
            max = palabras[i].length;
        }

    }

    max += 4;
    var salida = "";

    for(let i = 0; i<palabras.length+2; i++){

        if(i == 0 || i == palabras.length+1){

            salida += "*".repeat(max) + "\n";

        }else{

            var detras = max - 2 - (palabras[i-1].length);
            salida += "* " + palabras[i-1];
            salida += " ".repeat(detras-1) + "*" + "\n";

        }

    }


    console.log(salida);

}

mostrarTextoCaja('Hola soy Víctor Robles WEB');
