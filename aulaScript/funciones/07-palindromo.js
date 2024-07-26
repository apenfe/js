'use strict'

/*
Escribir una función que reciba un número como argumento y lo devuelva invertido,
 o sea, escrito del revés. Usar esta función para determinar si un número es capicúa (palíndromo)
*/

function palindromo(num){

    var entrada = ""+num;
    var salida = "";

    for(let i = entrada.length-1; i>= 0; i--){
        salida += entrada[i];
    }

    if(salida==entrada){
        return true;
    }

    return false;
}

if(palindromo(242)){
    alert("Es palindromo");
}else{
    alert("NO es palindromo");
}
