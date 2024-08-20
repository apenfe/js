/*
 
Enunciado Ejercicio 51:
Crea una función que dibuje un diamante de asteriscos.
 
Ejemplos:
generarDiamante(7);
 
Devuelve: 

       *
      *** 
     *****
    *******
     *****
      *** 
       *  
 
*/

function generarDiamante(filas){

    let salida = "";

    if(filas % 2 != 0){

        for(let i=0; i<(filas/2)-1; i++){

            salida += " ".repeat((filas/2)-i);
            salida += "*".repeat((i));
            salida += "*";
            salida += "*".repeat((i));
            salida += "\n";
    
        }
    
        salida += "*".repeat(filas) + "\n";
    
        for(let i=(filas/2)-1; i>=0; i--){
    
            salida += " ".repeat((filas/2)-i);
            salida += "*".repeat((i));
            salida += "*";
            salida += "*".repeat((i));
            salida += "\n";
    
        }

    }

    return salida;

}

let diamante = generarDiamante(7);

console.log(diamante);