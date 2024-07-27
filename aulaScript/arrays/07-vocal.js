'use strict'

/*
En este ejempo debes crear una función que reciba como argumento 
una letra y devuelva verdadero o falso (tru o false) dependiendo 
de si es una vocal o no. Debe funcionar igual con mayúsculas y 
con minúsculas y por supuesto usando arrays.

Solo se aceptan letras internacionales (sin acentos)
*/

function esVocal(letra){

    let vocales = ['a','e','i','o','u'];

    for(let i = 0; i<vocales.length; i++){

        if(vocales[i] == letra){
            return true;
        }
    }

    return false;

}

if(esVocal('a')){
    alert("Es vocal");
}else{
    alert("No es vocal");
}