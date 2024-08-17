/*
 
Enunciado Ejercicio 30:
Dado un array de numeros, permitir los numeros duplicados
un maximo de 2 veces y devolver la longitud del array.
 
Ejemplos:
eliminarDuplicados([4, 4, 4, 2, 2, 3]); // 5
eliminarDuplicados([6, 6, 2, 2, 2, 3]); // 5
eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9]); // 5
*/

function eliminarDuplicados(numeros){

    var salida = 0;
    var vistos = [0];

    numeros.forEach(numero => {

        if(vistos.indexOf(numero) == -1){

            let repeticiones = numeros.filter((item)=> item == numero);
            vistos.push(numero);

            if(repeticiones.length >= 2){
                salida+=2;
            }else{
                salida++;
            }
        }
        
    });

    return salida;

}

console.log(eliminarDuplicados([4, 4, 4, 2, 2, 3])); // 5
console.log(eliminarDuplicados([6, 6, 2, 2, 2, 3])); // 5
console.log(eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9])); // 6