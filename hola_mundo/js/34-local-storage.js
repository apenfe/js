'use strict'

// comprobar disponibilidad del local storage
if(typeof(Storage) !== 'undefined'){
    console.log("Local storage disponible");
}else{
    console.log("Local storage no disponible");
}

// guardar datos
localStorage.setItem("titulo","curso de js");

// recuperar elemento
var dato = localStorage.getItem("titulo");
console.log(dato);

var caja_peliculas = document.querySelector("#peliculas");
caja_peliculas.append(dato);

// guardar JSON

var usuario = {
    nombre: "adrian",
    apellido: "peñalver",
    edad: 26
};

localStorage.setItem("usuario",JSON.stringify(usuario));

// recuperar JSON

var user = JSON.parse(localStorage.getItem("usuario"));
console.log(user);

var caja_datos = document.querySelector("#datos");
caja_datos.append("NOMBRE: "+user.nombre);

// borrar datos concretos
localStorage.removeItem("usuario");

// borrar datos 
localStorage.clear();