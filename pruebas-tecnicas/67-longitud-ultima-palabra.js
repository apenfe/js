/*
 
Enunciado Ejercicio 67:
Dada una frase devuelve la longitud de la última palabra que tenga más de 4
caracteres y que contenga la vocal A.
 
Ejemplos:
longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy')
 
*/

function longitudUltimaPalabra(frase){

    let palabras = frase.split(" ");
    let salida = "";

    palabras.forEach(palabra => {

        if(palabra.length >= 4){

            if(palabra.indexOf("a") >=0 || palabra.indexOf("A") >= 0){
                salida = palabra;
            }
            
        }
        
    });

    return salida;

}

let resultado = longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy');
console.log(resultado);

