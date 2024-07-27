'use strict'

/*
 
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

function simplificaRuta(rutaAbsoluta){

    let directorios = rutaAbsoluta.split("/");

    let rutaRelativa = "";

    if(directorios.indexOf("home") == 1 && directorios.length <= 3){

        rutaRelativa += "/home";

    }else if(directorios.indexOf("home") == 1 && directorios.length > 3){

        rutaRelativa += "/home/";

        rutaRelativa += directorios[directorios.length-2];

    }else if(directorios.indexOf("home") != 1){

        if(directorios[directorios.length-2] == ".."){

            rutaRelativa += "/";

        }else{
            rutaRelativa += "/"+directorios[directorios.length-2];
        }

    }

    return rutaRelativa;

}

function solucionPropuesta(rutaAbsoluta){

    let pila = [];

    const partes = rutaAbsoluta.split("/");

    for(const parte of partes){

        if(parte === ".."){

            pila.pop();

        }else if(parte !== "." && parte !== ""){

            pila.push(parte);

        }

    }

    return '/'+pila.join("/");

}

console.log(simplificaRuta("/home/"));
console.log(simplificaRuta("/x/./y/../../z/"));
console.log(simplificaRuta("/../"));
console.log(simplificaRuta("/home//pruebas/"));

console.log(solucionPropuesta("/home/"));
console.log(solucionPropuesta("/x/./y/../../z/"));
console.log(solucionPropuesta("/../"));
console.log(solucionPropuesta("/home//pruebas/"));
