'use strict'

var formulario = document.querySelector("#formpeliculas");
var formulario2 = document.querySelector("#formborrarpeliculas");

formulario.addEventListener('submit', function(){

    var titulo = document.querySelector("#addpelicula").value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo,titulo);
    }
   
});

formulario2.addEventListener('submit', function(){

    var titulo = document.querySelector("#borrarpelicula").value;

    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
   
});

for(var indice in localStorage){
    console.log(localStorage[indice]);
}

var lista = document.querySelector("#peliculas-list");

for(var indice in localStorage){

    var item = document.createElement("li");

    if(typeof localStorage[indice]=='string'){

        item.textContent = localStorage[indice];
        lista.append(item);

    }

}
