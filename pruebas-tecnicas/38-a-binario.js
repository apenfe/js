/*
 
Enunciado Ejercicio 38:
Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100
*/

function aBinario(decimal){

    let binario = "";
    
    while(decimal > 0){

        if(decimal % 2 == 0){

            binario+= "0";

        }else{

            binario+= "1";

        }

        decimal = parseInt(decimal / 2);

    }

    let salida = "";
    for(let i = binario.length-1; i>=0; i--){
        salida += binario[i];
    }

    return salida;

}

console.log(aBinario(10)); // 1010
console.log(aBinario(76)); // 1001100