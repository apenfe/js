'use strict'

/*
Escribir un script usando el bucle do while para pedir que el usuario escriba dos números. 
Si el primero es mayor que el segundo el programa volverá a pedir que se escriban los números. 
Si el primero es menor o igual que el segundo el programa acaba y dice "Numeros en orden creciente"

Si tecleo pimero un 12 y luego un 9, volverá a pedirme que escriba los datos. 
Si escribo un 12 y luego un 20 me dirá "Numeros ordenados"
*/

do{

    var num1 = parseFloat(prompt("Inserte el primer numero: "));
    var num2 = parseFloat(prompt("Inserte el segundo numero: "));

    if(num1 > num2){
        continue;
    }else if(num1 < num2){
        alert("NUmeros ordenados");
        break;
    }

}while(true);