/*
 
Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
*/

function buscarPalabra(frase, palabra){

    let palabras = frase.split(" ");

    for(let i = 0; i< palabras.length; i++){

        if(palabras[i] === palabra){
            return true;
        }
        
    }

    return false;

}

if(buscarPalabra('Hola como estas', 'Hola')){
    console.log("Esta en la frase");
}else{
    console.log("No esta en la frase");
}