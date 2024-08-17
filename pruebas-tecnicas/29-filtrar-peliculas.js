/*
Enunciado Ejercicio 29:
Dado un array de objetos de peliculas de los años 80 y 90. 
 
Crea dos funciones:
- Una que las filtre por género
- y otra que las filtre por la decada en este formato 80s o 90s
 
Array de objetos a utilizar:
const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
  ];
 
Ejemplos:
filtrarPorGenero(peliculas, "accion")
filtrarPorDecada(peliculas, "80s")
*/

const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
  ];

function filtrarPorGenero(pelis,genero){

    var pelisFiltradas = pelis.filter((peli) => peli.genero === genero);

    if(pelisFiltradas.length == 0){
        console.log("No existen peliculas del genero "+genero);
    }else{
        console.log(pelisFiltradas);
    }

}

function filtrarPorDecada(pelis,decada){

    if(decada == "80s" || decada == "90s"){

        if(decada == "80s"){
            var pelisFiltradas = pelis.filter((peli) => peli.anioLanzamiento >= 1980 && peli.anioLanzamiento < 1990 );
        }else{
            var pelisFiltradas = pelis.filter((peli) => peli.anioLanzamiento >= 1990 && peli.anioLanzamiento < 2000 );
        }

        if(pelisFiltradas.length == 0){
            console.log("No existen peliculas de la decada de los "+decada);
        }else{
            console.log(pelisFiltradas);
        }

    }else{
        console.log("No es una decada valida.");
        return false;
    }

}

filtrarPorGenero(peliculas, "accion");
filtrarPorDecada(peliculas, "80s");