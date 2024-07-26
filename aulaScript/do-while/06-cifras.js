'use strict'

/*
Este ejemplo debe pedir al usuario un  número entero y, 
mediante sucesivas divisiones por 10 debe escribir los 
digitos que lo forman de menor a mayor orden (de unidades hacia arriba) 
en una cadena separados por un espacio

Si escribo 126 deberá responder  "Dígitos del número: 6 2 1"

No vale usar cadenas (strings) se debe usar la división como dice el enunciado.
*/

var numero = 126;
var cifras = [];

do{

    var divisor = parseInt(numero/10);
    
    cifras.push(numero-(divisor*10));

    numero = divisor;


}while(numero>0);

for(let i=0; i<cifras.length; i++){

    console.log(cifras[i]+",");

}
