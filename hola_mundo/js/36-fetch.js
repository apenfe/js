'use strict'

// fetch (ajax) y peticiones a servicios / apis rest
// peticiones asincronas a un servidor

var div = document.querySelector("#usuarios");
var janet = document.querySelector("#janet");

getUsuarios()
    .then(data => data.json())
    .then(data => {

        listadoUsuarios(data);

        return getErvin();

}).then(data => data.json()).then(user => {
    mostrarErvin(user);
});

function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getErvin(){
    return fetch('https://jsonplaceholder.typicode.com/users/2');
}

function listadoUsuarios(usuarios){

    for(let i in usuarios){

        let nombre = document.createElement("h3");
        nombre.innerHTML = i +" "+usuarios[i].name;
        div.appendChild(nombre);

    }

    document.querySelector(".loading").style.display = "none";

}

function mostrarErvin(user){

    let nombre = document.createElement("h4");
    nombre.innerHTML = user.name;
    janet.appendChild(nombre);
    document.querySelector("#janet .loading").style.display = "none";

}