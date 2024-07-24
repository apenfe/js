'use strict'

/*
Se quiere tener un contador de dos dígitos en base 5. 
El funcionamiento es simple: el dígito de la derecha irá 
aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito 
de la izquierda se incrementa en 1. El contador debe deternerse 
cuando alcancemos el valor 1:4
*/

var derecha = 0;
var izquierda = 0;

for(let i=0; i<=4 ; i++){

    if(i==4){
        izquierda++;
        i=0;
        derecha=0;

        if(izquierda>3){
            i=4;
        }
    }

    derecha++;
    console.log(izquierda+":"+derecha);

}