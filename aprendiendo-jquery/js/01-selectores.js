$(document).ready(function(){    // $ se refiere al objeto jquery
    console.log("Estamos listos");
    
    // selector de ID
    var rojo = $("#rojo").css("background","red")
                        .css("color","white");

    $("#amarillo").css("background","yellow")
    .css("color","green");

    $("#verde").css("background","green")
    .css("color","white");

    // selector de clase
    var mi_clase = $(".zebra").css("padding","5px");

    var sin_borde = $(".sin_borde");

    sin_borde.click(function(){
      
        $(this).addClass('zebra');
       
    });


// selector de etiqueta

var parrafos = $("p").css("cursor","pointer");

parrafos.click(function(){

    var thi = $(this);

    if(!thi.hasClass('grande')){
        thi.addClass('grande');
    }else{
        thi.removeClass('grande');
    }
  
});

// selectores de atributo

$('[title="facebook"]').css('background','#ccc');
$('[title="google"]').css('background','blue');


// otros
$('p,a').addClass('margen_superior');

var busqueda = $('#caja').find('.resaltado');
console.log(busqueda);

var busqueda2 = $('#elemento2').parent().parent().find('.resaltado');
console.log(busqueda2);
});