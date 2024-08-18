/*
 
Enunciado Ejercicio 41:
Crea una función que invierta los números de un número entero.
 
Ejemplos:
invertirEntero(123)   // 321
invertirEntero(-123)  // -321
 
*/

function invertirEntero(numero){

    let texto = ""+numero;
    let salida = "";
    let simbolo = false;

    if(texto[0]=="+" || texto[0]=="-"){

        salida += texto[0];
        simbolo=true;

    }

    for(let i= texto.length-1 ; i>=0; i--){

        if(i==0 && simbolo){
            continue;
        }

        salida += texto[i];        

    }

    return salida;

}

console.log(invertirEntero(123));   // 321
console.log(invertirEntero(-123));  // -321