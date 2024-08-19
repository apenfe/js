/*

Enunciado Ejercicio 50:
Crea una función que dada una temperatura la pase a grados
celsius o grados fahrenheit.
 
Ejemplos:
convertirTemperatura('29°C')  // Devuelve: "84.20°F"
convertirTemperatura('77°F')  // Devuelve: "25.00°C"

*/

function convertirTemperatura(temperatura){

    let temp = temperatura.replaceAll("°","");
    let letra = temperatura[temperatura.length -1];
    temp = temperatura.replaceAll(letra,"");
    let salida = "";

    if(letra === "C"){

        salida += (parseFloat(temp) * 9/5) + 32;
        salida += "°F";

    }else{

        salida += (parseFloat(temp) - 32) * 5/9;
        salida += "°C";
        
    }

    return salida;

}

let temperatura = convertirTemperatura('29°C');  // Devuelve: "84.20°F"
console.log(temperatura);

temperatura = convertirTemperatura('77°F');  // Devuelve: "25.00°C"
console.log(temperatura);