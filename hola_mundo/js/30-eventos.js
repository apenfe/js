'use strict'

// eventos del raton

window.addEventListener('load',() => {

    function cambiaColor(){
        var bg = boton.style.background;
    
        if(bg == "green"){
            boton.style.background= "red";
        }else{
            boton.style.background= "green";
        }
    
        boton.style.padding= "10px";
        boton.style.border= "1px solid #ccc";
    
        return true;
    }
    
    function cambiaColor2(){
        var bg = boton.style.background;
    
        if(bg == "green"){
            boton.style.background= "red";
        }else{
            boton.style.background= "green";
        }
    
        boton.style.padding= "10px";
        boton.style.border= "8px solid #ccc";
    
        return true;
    }
    
    var boton = document.querySelector("#boton");
    
    // evento doble click
    boton.addEventListener('dblclick', function(){
        cambiaColor();
    });
    
    // evento click
    boton.addEventListener('click', function(){
        cambiaColor2();
    });
    
    // evento mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "#ccc";
    });
    
    // evento mouse out
    boton.addEventListener('mouseout', function(){
        boton.style.background = "darkgrey";
    });
    
    // focus
    var input = document.querySelector("#campo_nombre");
    
    input.addEventListener('focus', function(){
        console.log("[focus] Estas dentro del input");
    });
    
    // blur
    
    input.addEventListener('blur', function(){
        console.log("[blur] Estas saliendo del input");
    });
    
    // keydown
    
    input.addEventListener('keydown', function(event){
        console.log("[keydown] Estas pulsando la tecla: "+event.key);
    });
    
    // keypress
    
    input.addEventListener('keypress', function(event){
        console.log("[keypressed] Estas presionando la tecla: "+event.key);
    });
    
    // keyup
    
    input.addEventListener('keyup', function(event){
        console.log("[keyup] Estas soltando la tecla: "+event.key);
    });

});
