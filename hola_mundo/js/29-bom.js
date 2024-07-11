'use strict'

// browser object model

function getBom(){

    console.log("Altura: "+window.innerHeight);
    console.log("Anchura: "+window.innerWidth);

    console.log("Altura pantalla: "+screen.height);
    console.log("Anchura pantalla: "+screen.width);

    console.log("URL: "+window.location);
}

function redirect(url){

   window.location.href = url;

}

function abrirVentana(url){

    window.open(url,"","width=400,height=300");
 
 }

getBom();
abrirVentana("https://bropincel.es");
