/*
 
Enunciado Ejercicio 70:
Crea una función que dado un texto que contenga varias frases en minusculas,
logre poner en mayusculas las letras correctas del texto. 
 
Ejemplos:
capitalizarFrase("hola. como estas. soy Víctor Robles. me gusta programar.");
 
Devuelve:
Hola. Como estas. Soy Victor Robles. Me gusta programar.
*/

function capitalizarFrase(frase){

    let palabras = frase.split(" ");

    for(let i = 0; i<palabras.length; i++){

        if(i==0){
            palabras[i] = palabras[i].replace(palabras[i][0],palabras[i][0].toUpperCase());
        }else{

            if(palabras[i-1][palabras[i-1].length-1] === "."){
                palabras[i] = palabras[i].replace(palabras[i][0],palabras[i][0].toUpperCase());
            }

        }

    }

    let salida = "";

    for(let i = 0; i<palabras.length; i++){

        if(i != palabras.length-1){
            salida += palabras[i]+" ";
        }else{
            salida += palabras[i];
        }

    }

    return salida;

}

let resul = capitalizarFrase("hola. como estas. soy Víctor Robles. me gusta programar.");
console.log(resul);
