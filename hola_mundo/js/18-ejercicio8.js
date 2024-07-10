'use strict'

/*
Calculadora:
-pida dos numeros por pantalla
-si metemos una mal que nos los vuelva a pedir
- en el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir
*/

while(true){

    var num1 = parseInt(prompt("Inserta el 1º numero: ",0));
    var num2 = parseInt(prompt("Inserta el 2º numero: ",0));

    if(isNaN(num1)||isNaN(num1)){

        alert("Datos introducidos no son correctos");
        continue;

    }else{

        alert("+: "+(num1+num2)+"\n -: "+(num1-num2)+"\n *: "+(num1*num2)+"\n /: "+(num1/num2));
        document.write("<h1>De "+num1+" a "+num2+" estas son las operaciones: </h1><br/>");
        document.write("<h2>Suma: " + num1 + " + " + num2 + " = " + (num1+num2) + "</h2><br/>");
        document.write("<h2>Resta: " + num1 + " - " + num2 + " = " + (num1-num2) + "</h2><br/>");
        document.write("<h2>Multiplicacion: " + num1 + " * " + num2 + " = " + (num1*num2) + "</h2><br/>");
        document.write("<h2>Division: " + num1 + " / " + num2 + " = " + (num1/num2) + "</h2><br/>");
        break;

    }

}
