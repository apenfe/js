/*
 
Enunciado Ejercicio 53:
Crea una función para encontrar la longitud del mayor
subconjunto de caracteres que no se repiten.
 
Ejemplos:
encontrarSubcadenaSinRepetir("abcabcbb")  // abc, 3
encontrarSubcadenaSinRepetir("bbbbb")     // b, 1
encontrarSubcadenaSinRepetir("pwwkew")    // wke, 3
*/

function encontrarSubcadenaSinRepetir(cadena){

    let subcadenasinrepetit = "";

    let subcadenaActual = "";

    for(caracter of cadena){

        // si el caracter ya esta en la subcadena actual la reiniciamos
        if(subcadenaActual.indexOf(caracter) != -1){
            subcadenaActual = "";
        }

        // añadir el caracter a la subcadenaactual
        subcadenaActual += caracter;

        // comprobar longitud de la subcadena
        if(subcadenaActual.length > subcadenasinrepetit.length){
            subcadenasinrepetit = subcadenaActual;
        }

    }

    return subcadenasinrepetit;

}

console.log(encontrarSubcadenaSinRepetir("abcabcbb"));  // abc, 3
console.log(encontrarSubcadenaSinRepetir("bbbbb"));     // b, 1
console.log(encontrarSubcadenaSinRepetir("pwwkew"));    // wke, 3