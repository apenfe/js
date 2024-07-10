'use strict'

/*
Que nos diga si un numero es par o impar
1. ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

while(true){

    var numero = parseInt(prompt("Inserta el numero: ",0));

    if(isNaN(numero)){

        alert("Datos introducidos no son correctos")
        continue;
    }else{
    
        document.write("<h1>El numero "+numero+" es... </h1>")
    
        if(numero % 2 == 0){
            document.write("<br/><h2>par</h2>");
        }else{
            document.write("<br/><h2>impar</h2>");
        }
        break;
    }

}
