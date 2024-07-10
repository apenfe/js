'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son igaules.
Si los numeros no son un numero o son menores o iguales a cero, nos lo vuelva a pedir
*/

while(true){

    var num1 = parseInt(prompt("Inserta el numero 1:","0"));
    var num2 = parseInt(prompt("Inserta el numero 2:","0"));

    if((isNaN(num1) || isNaN(num2))||(num1<=0 || num2<=0)){

        alert("introduce numeros correctos");
        continue;

    }else{

        if(num1>num2){
            console.log("El numero 1 es mayor que el 2: "+num1+" > "+num2);
        }else if(num1<num2){
            console.log("El numero 2 es mayor que el 1: "+num2+" > "+num1);
        }else if(num1==num2){
            console.log("El numero 1 es igual que el 2: "+num1+" = "+num2);
        }else{
            console.log("introduce numeros correctos");
        }

        break;

    }

}
