'use strict'

// fetch (ajax) y peticiones a servicios / apis rest
// peticiones asincronas a un servidor

var div = document.querySelector("#usuarios");
var janet = document.querySelector("#janet");
var profesor = document.querySelector("#profesor");

getUsuarios()
    .then(data => data.json())
    .then(data => {

        listadoUsuarios(data);
        return getInfo();

}).then(data => {

    console.log(data);
    mostrarProfesor(data);
    return getErvin();

}).then(data => data.json()).then(user => {

    mostrarErvin(user);

}).catch(error => {
    console.log(error);
    alert("error al realizar la peticion.")
});

function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getErvin(){
    return fetch('https://jsonplaceholder.typicode.com/users/2');
}

function getInfo(){

    var profesor = {
        nombre: "victor",
        apellidos: "robles",
        url: "https://victorroblesweb.es"
    };

    return new Promise((resolve, reject) => {

        var profesor_string = "";

        setTimeout(function(){

            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' || profesor_string == ""){
                return reject("error");
            }else{
                return resolve(profesor_string);
            }

        }, 3000);

    });

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

function mostrarProfesor(user){

    let nombre = document.createElement("h4");
    nombre.innerHTML = user;
    profesor.appendChild(nombre);
    document.querySelector("#profesor .loading").style.display = "none";

}