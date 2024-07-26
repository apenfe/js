'use strict'

/* 
Diseñar un script que pida un número mayor que cero y devuelva la suma 
de todos los números pares desde cero al número introducido. Mostrará 
la suma y volverá a pedir otro núero hasta que el usuario teclee un 0.

Si tecleo el 10 mostrará 30 la suma de 2+4+6+8+10
*/

do{

    var numero = parseInt(prompt("Inserte un numero positivo: "));

    if(numero >0){

        var cont = 0;
        var suma = 0;

        do{

            if(cont % 2 == 0){
                suma += cont;
            }

            cont++;

        }while(cont<=numero);

        console.log("la suma es "+suma)

    }else if(numero == 0){
        break;
    }

}while(true);