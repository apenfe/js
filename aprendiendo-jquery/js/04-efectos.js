$(document).ready(function(){

    var caja = $('#caja');
    var mostrar = $('#mostrar');
    var ocultar = $('#ocultar');

    mostrar.click(function(){
        ocultar.show();
        mostrar.hide();

       // caja.show('fast'); // hace una animacion con display none
        caja.fadeIn('fast');
       // caja.fadeTo('fast', 1); controla el fade desde un punto a otro de opacidad

    });

    ocultar.click(function(){
        ocultar.hide();
        mostrar.show();

       // caja.hide('fast'); // normal, slow, etc...
        caja.fadeOut('fast');
       // caja.fadeTo('fast', 0);

    });

    $('#todoenuno').click(function(){

        caja.toggle('fast');

    });

});