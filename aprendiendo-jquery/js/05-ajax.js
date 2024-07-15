$(document).ready(function(){

    // load

   // $('#datos').load("https://reqres.in/");

    // get y post

    $.get("https://reqres.in/api/users", {page: 2}, function(response){

        console.log(response);

        response.data.forEach(element => {

            $('#datos').append("<p>"+element.first_name+" "+element.last_name+"</p>");
            
        });
    });

    var usuario = {
        nombre: "adrian",
        web: "ejemplo.es"
    };

    $.post("https://reqres.in/api/users", usuario, function(response){

        console.log(response);

    });

    $('#formulario').submit(function(e){

        e.preventDefault;

        var usuario = {
            nombre: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
/*
        console.log(usuario);
    
        $.post($(this).attr("action"), usuario, function(response){
    
            console.log(response);
    
        }).done(function(){
            alert("usuario añadido correctamente");
        });

        $('#datos').append("<p>"+usuario.nombre+" "+usuario.web+"</p>");
*/
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("enviando usuario.");
            },
            success: function(response){
                console.log("Envio correcto (data) ==>");
                console.log(response);
            },
            error: function(){
                console.log("Ha ocurrido un error.");
            },
            timeout: 2000
        });

        return false;

    });

});


