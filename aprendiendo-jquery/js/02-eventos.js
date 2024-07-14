$(document).ready(function(){

    // mouse over y mouseout
    var caja = $("#caja");

    /*
    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","yellow");
    });
    */

    // hover

    function cambiaRojo(){
        $(this).css("background","red");
    }

    function cambiaAmarillo(){
        $(this).css("background","yellow");
    }

    caja.hover(cambiaRojo,cambiaAmarillo);

    // click y dobleclick

    caja.click(function(){
        $(this).css("background","blue").css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background","pink").css("color","yellow");
    });

    // focus y blur

    var datos = $("#datos");

    $("#nombre").focus(function(){
        $(this).css("border","4px solid green");
    });

    $("#nombre").blur(function(){
        $(this).css("border","1px solid #ccc");
        datos.text($(this).val()).show();
    });

    // mouse down y mouse up

    datos.mousedown(function(){
        $(this).css("border-color","gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });

    var puntero = $("#sigueme");

    // mouse move
    $(document).mousemove(function(){
        $('body').css("cursor","none");
        console.log("Coordenada (X): "+event.clientX);
        console.log("Coordenada (Y): "+event.clientY);
        puntero.css("left",event.clientX-15).css("top",event.clientY-15);
    });

});