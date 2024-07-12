'use strict'

var pelicula = {
    titulo: "Batman vs Superman",
    year: 2017,
    pais: "Estados unidos"
};

var caja_peliculas = document.querySelector("#peliculas");

var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: "Francia"},
    {titulo: "Mulan", year: 2000, pais: "Estados unidos"},
    pelicula
]

console.log(pelicula.titulo);

for(let indice in peliculas){
    console.log(peliculas[indice]);
    var parrafo = document.createElement("p");
    parrafo.append(peliculas[indice].titulo);
    caja_peliculas.append(parrafo);
}