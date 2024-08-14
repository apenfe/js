/*
 
Enunciado Ejercicio 25:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]);
 
Devuelve: 
[ 'nombre.jpg', 'apellido.doc', 'nombre.png', 'nombre(1).png', 'nombre(1).jpg', 'nombre(2).jpg']
 
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

            var separacion = nombres[i].split(".");

            for(let j = 0; j< contador; j++){

                if(j==0){
                    nuevos_nombres.push(nombres[i]);
                }else{
                    nuevos_nombres.push(separacion[0]+"("+j+")."+separacion[1]);
                }
               
            }

        }else{
            console.log("indice pañabra: "+i+" entra en else");
            continue;
        }

    }

    return nuevos_nombres;

}

console.log(renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"])); 

// Devuelve: [ 'nombre.jpg', 'apellido.doc', 'nombre.png', 'nombre(1).png', 'nombre(1).jpg', 'nombre(2).jpg']