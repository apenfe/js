'use strict'

window.addEventListener('load', () => {

    // timers

    function intervalo(){

        var tiempo = setInterval(function(){
            console.log("set interval ejecutado");
    
            var encabezado = document.querySelector("h1");
    
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
            }else{
                encabezado.style.fontSize = "50px";
            }
            
        }, 1000);

        return tiempo;
    }

    var tiempo = intervalo();

   /* // timers que solo se ejecuta una vez
    var tiempo = setTimeout(function(){
        console.log("set interval ejecutado");

        var encabezado = document.querySelector("h1");

        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px";
        }else{
            encabezado.style.fontSize = "50px";
        }
        
    }, 5000);*/

    var parar = document.querySelector("#stop");

    parar.addEventListener('click',function(){
        clearInterval(tiempo);
        alert("has parado el parpadeo");
    });

    var iniciar = document.querySelector("#start");

    iniciar.addEventListener('click',function(){
        intervalo();
        alert("has iniciado el parpadeo");
    });

});