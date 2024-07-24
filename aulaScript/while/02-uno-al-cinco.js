'use script'

/*
Se trata de pedir al usuario que teclee un número entre 1 y 5, 
si escribe alguno que esté fuera de ese rango deberá volver a pedir el número
*/

while(true){

    var numero = parseInt(prompt("Inserte un numero: "));

    if(numero<1 || numero>5){
        console.log("Inserte un numero entre el 1 al 5.");
    }else{
        break;
    }
    
}