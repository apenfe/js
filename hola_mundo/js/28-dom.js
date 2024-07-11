'use strict'

// DOM- document object model

function cambiaColor(color){
    caja.style.background = color;
}

var caja = document.getElementById("micaja");
// var caja = document.querySelector("#micaja");
// var caja = document.querySelector(".unaclase");

caja.innerHTML= "TEXTO EN CAJA DESDE JS"; // EL INNER CAMBIA EL CONTENIDO DE ETIQUETA

cambiaColor(prompt("Inserte un color: ","red"));
caja.style.padding = "20px";
caja.style.color = "white";

caja.className = "hola"; // cambiar la clase del elemento

console.log(caja);

// conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");

todosLosDivs[2].style.backgroundColor = "blue";

console.log(todosLosDivs[2].textContent);

console.log(todosLosDivs);

var seccion =  document.querySelector("#miseccion");
var hr = document.createElement('hr');

for(let valor in todosLosDivs){

    if(typeof todosLosDivs[valor].textContent == "string"){

        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);

    }

}

seccion.append(hr);

// conseguir elementos por su clase