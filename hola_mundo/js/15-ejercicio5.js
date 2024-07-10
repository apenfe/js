'use strict'

/*
Muestra todos los numeros divisores de un numero introducido por el prompt
*/

var numero = parseInt(prompt("Inserta el numero: ",0));

if(isNaN(numero)){
    alert("Datos introducidos no son correctos")
}else{

    document.write("<h1>Estos son numeros divisores de "+numero+": </h1>")


    for(var i = 0; i<=numero; i++){

        if(numero % i == 0){
            document.write(i+"<br/>");
        }
        
    }

}