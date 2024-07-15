$(document).ready(function(){

    // mover elemnto por la pagina
    $('.elemento').draggable();

    // redimensionar
    $('.elemento').resizable();

    // lista seleccionable 
    $('.lista_seleccionable').selectable();

    // lista ordenable 
    $('.lista_ordenable').sortable({
        update: function(event,ui){
            console.log("cambio en la lista");
        }
    });

    // drop
    $('#elemento_movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    // efectos
    $('#mostrar').click(function(){
        $(".caja_efectos").toggle("fade",2000); // blink, slide, drop, fold, puff, scale, shake
       // $(".caja_efectos").effect("explode");
    });

});