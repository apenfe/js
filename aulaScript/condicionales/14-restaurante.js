'use strict'

/*
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura.
Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le 
ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.
*/

var menu = prompt("Carne, pescado o verdura: ");

menu = menu.toLowerCase();

if(menu == carne){
    console.log("vino tinto");
}else if(menu == pescado){
    console.log("vino blanco");
}else if(menu == verdura){
    console.log("agua");
}else{
    console.log("debe elegir otro menu");
}