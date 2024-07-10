'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt("Inserta el 1º numero: ",0));
var num2 = parseInt(prompt("Inserta el 2º numero: ",1));

if(isNaN(num1)||isNaN(num1)){
    alert("Datos introducidos no son correctos")
}else{

    document.write("<h1>De "+num1+" a "+num2+" estan estos numeros: </h1>")

    if(num1<num2){

        for(num1; num1<=num2; num1++){

            if(num1 % 2 == 0){
                document.write(num1+"<br/>");
            }
        
        }

    }else if(num2<num1){

        for(num2; num2<=num1; num2++){

            if(num2 % 2 == 0){
                document.write(num2+"<br/>");
            }
           
        }

    }else{

        if(num1 % 2 == 0){
            document.write(num1+"<br/>");
        }

    }

}
