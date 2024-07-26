'use strict'

/*
Esta función se va a llamar esPar(num) y deberá devolver verdadero si el 
argumento es par y falso si es impar. Se acepta que solo se usarán números válidos.
*/

function esPar(numero){

    if(numero%2==0){

        return true;

    }else{

        return false;

    }

}

if(esPar(8)){
    console.log("Es par");
}else{
    console.log("Es impar");
}