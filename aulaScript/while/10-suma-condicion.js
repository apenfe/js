'use strict'

/*
Un script pedirá al usuario que vaya tecleando números de manera repetida. 
cuando pulse 0, el programa muestra "La suma es " seguido de la suma de los números. 
Si esta suma es par el programa se repite y si es impar el programa acaba.
*/

var suma = 0;

while(true){

    var numero = parseInt(prompt("Inserte un numero: "));

    if(numero == 0){

        alert("La suma es "+suma);

        if(suma % 2 != 0){1
            break;
        }

    }else{

        suma += numero;

    }

}