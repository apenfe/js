/*
 
Enunciado Ejercicio 68:
Crea una función que pueda generar contraseñas aleatorias.
 
Podrás pasar los siguientnes parámetros para las contraseñas:
- Longitud: Entre 6 y 20.
- Con o sin mayúsculas.
- Con o sin números.
- Con o sin símbolos.
 
Ejemplos:
generarContrasenia(12, true, true, false);
 
*/

function generarContrasenia(longitud, mayusculas=false, numeros=false, simbolos=false){

    let min = 0;
    let salida = "";
    const simbol = ["!","$","@","<","%","+","-"];
    const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    if(mayusculas){
        min++;
        salida += letras[Math.floor(Math.random() * letras.length)].toUpperCase();
    }

    if(numeros){
        min++;
        salida += Math.floor(Math.random() * 10);
    }

    if(simbolos){
        min++;
        salida += simbol[Math.floor(Math.random() * simbol.length)];
    }

    if(longitud < min){
        return "La contraseña debe ser de longitud superior a "+ min;
    }

    for(let i = min; i < longitud; i++){

        let tipo = Math.floor(Math.random() * 3);
        console.log(tipo)

        if(tipo == 0 && simbolos){
            salida += simbol[Math.floor(Math.random() * simbol.length)];
        }else if(tipo == 0 && numeros){
            salida += Math.floor(Math.random() * 10);
        }else if( tipo == 2 && mayusculas){
            salida += letras[Math.floor(Math.random() * letras.length)].toUpperCase();
        }else{
            salida += letras[Math.floor(Math.random() * letras.length)];
        }
        
    }

    return salida;

}

let solucion = generarContrasenia(12, true, true, true);
console.log(solucion);