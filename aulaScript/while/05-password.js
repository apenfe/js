'use strict'

/*
Escribir un script que pida al usuario una contraseña. 
Si coincide con la clave definida en el script le devolverá 
el mensaje "Acceso concedido" y si no coincide le devolverá 
el mensaje "Acceso Denegado" . Si falla tres veces se emitirá 
el mensaje "Alerta, intruso"
*/

var password = "123456";

while(true){

    var entrada = prompt("Inserte la contraseña: ");

    if(entrada === password){
        console.log("Puedes pasar");
    }else{
        console.log("NO Puedes pasar");
    }

}