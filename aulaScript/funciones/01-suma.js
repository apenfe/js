'use strict'

/*
Crea una función que tenga dos argumentos: num1, num2, 
y que devuelva como resultado la suma de ambos números. 
Se supone que se usarán solo números válidos, no letras o símbolos. 
*/

function suma(num1, num2){

    if(typeof num1 == "number" && typeof num2 == "number"){
        return num1+num2;
    }else{
        return undefined;
    }

}

console.log(suma(2,5));