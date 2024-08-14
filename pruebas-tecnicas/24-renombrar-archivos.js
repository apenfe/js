/*
 
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 
*/

function renombrarArchivos(nombres){

    var nuevos_nombres = [];

    for(let i = 0; i< nombres.length; i++){

        var contador = 0;

        if(nuevos_nombres.indexOf(nombres[i]) < 0){
           
            for(let j = 0; j< nombres.length; j++){

                if(nombres[i] == nombres[j]){
                    contador ++;
                }
    
            }

            for(let j = 0; j< contador; j++){

                if(j==0){
                    nuevos_nombres.push(nombres[i]);
                }else{
                    nuevos_nombres.push(nombres[i]+"("+j+")");
                }
               
            }

        }else{
            console.log("indice pañabra: "+i+" entra en else");
            continue;
        }

    }

    return nuevos_nombres;

}

console.log(renombrarArchivos(["nombre", "apellido", "nombre", "nombre"])); // Devuelve: [ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]