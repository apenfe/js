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

        caja.fadeToggle('slow', function(){
            console.log("cartel ocultado");
        }); // toggle, slideToggle

    });

    $('#animar').click(function(){

        caja.animate(
                {
                    marginLeft:'300px',
                    fontSize:'40px',
                    height: '100px'
                
                },'slow')
            .animate(
                {
                    borderRadius:'900px',
                    marginTop:'100px'
                },'normal')
            .animate(
                {
                    borderRadius:'100px',
                    marginLeft:'0px',
                    marginTop: '0px'
                },'normal')
            .animate(
                {
                    marginLeft:'300px',
                    fontSize:'40px',
                    height: '100px'
                },'slow');

    });

});