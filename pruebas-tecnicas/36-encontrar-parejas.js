/*
 
Enunciado Ejercicio 36:
Crea un programa que encuentre las parejas de números que como resultado
dan un número que pasamos a la función por parametro.
 
Ejemplos:
encontrarParejasConSuma([1, 2, 3, 4], 5);
 
Devuelve: 
[ [ 1, 4 ], [ 2, 3 ] ]
 
*/

function encontrarParejasConSuma(numeros, suma){

    var solucion = [];

    for(let i = 0; i<numeros.length; i++){

        var pareja = []; 

        for(let j = 0; j<numeros.length; j++){

            if(j==i){
                continue;
            }else{

                if(numeros[j]+numeros[i] == suma){

                    pareja.push(numeros[i]);
                    pareja.push(numeros[j]);

                    numeros[i]=0;
                    numeros[j]=0;

                    solucion.push(pareja);

                }

            }
        
        }

    }

    return solucion;

}

console.log(encontrarParejasConSuma([1, 2, 3, 4], 5)); // Devuelve: [ [ 1, 4 ], [ 2, 3 ] ]