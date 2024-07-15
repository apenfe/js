$(document).ready(function(){

    var boton = $('#add_button');

    boton.removeAttr('disabled');

    var link = $('#add_link');
    var menu = $('#menu');

    reloadLinks();

    console.log($('a').length);

    boton.click(function(){

        // menu.html('<li><a href="'+link.val()+'"></a></li>'); // añade html pero borra el restp
        menu.append('<li><a href="'+link.val()+'"></a></li>'); // añade al final de la lista

        // prepend lo añade al inicio de la lista
        // before, lo añade en el padre del elemento en cuestion
        reloadLinks();

        link.val('');

    });

    function reloadLinks(){

        $('a').each(function(){

            var elemento = $(this);
    
            console.log(elemento);
            console.log(elemento.attr("href"));
            
            elemento.attr('target','_blank');
    
            var enlace = elemento.attr("href");
            elemento.text(enlace);
    
        });

    }

});