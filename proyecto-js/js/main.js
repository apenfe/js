$(document).ready(function () {

    // Slider imagenes

    if(window.location.href.indexOf('index') > -1){

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });

    }

    // Posts

    if(window.location.href.indexOf('index') > -1){

        var posts = [
            {
                title: "Prueba titulo 1",
                date: 'Publicado el día: ' + moment().date() + ' de '+ moment().format("MMMM") + ' del '+ moment().format("YYYY"),
                content: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
                            ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.
                            del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló
                            de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino
                            que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
                            igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las
                            cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
                            por ejemplo Aldus PageMaker`
            },
            {
                title: "Prueba titulo 2",
                date: 'Publicado el día: ' + moment().date() + ' de '+ moment().format("MMMM") + ' del '+ moment().format("YYYY"),
                content: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
                            ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.
                            del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló
                            de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino
                            que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
                            igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las
                            cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
                            por ejemplo Aldus PageMaker`
            },
            {
                title: "Prueba titulo 3",
                date: 'Publicado el día: ' + moment().date() + ' de '+ moment().format("MMMM") + ' del '+ moment().format("YYYY"),
                content: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
                            ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.
                            del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló
                            de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino
                            que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
                            igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las
                            cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
                            por ejemplo Aldus PageMaker`
            },
            {
                title: "Prueba titulo 4",
                date: 'Publicado el día: ' + moment().date() + ' de '+ moment().format("MMMM") + ' del '+ moment().format("YYYY"),
                content: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
                            ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.
                            del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló
                            de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino
                            que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
                            igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las
                            cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
                            por ejemplo Aldus PageMaker`
            }
        ];

        var contenido = $('#posts');

        posts.forEach((item, index) => {

            var post = `<article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                        ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>`;

            contenido.append(post);

        });

    }

    // selector de tema

    var tema = $('#theme');

    var storedTheme = localStorage.getItem("tema");

    if (storedTheme) {
        tema.attr("href", storedTheme);
    }

    $('#to-green').click(function(){
        tema.attr("href",'css/green.css');
        localStorage.setItem("tema","css/green.css");
    });

    $('#to-red').click(function(){
        tema.attr("href",'css/red.css');
        localStorage.setItem("tema",'css/red.css');
    });

    $('#to-blue').click(function(){
        tema.attr("href",'css/blue.css');
        localStorage.setItem("tema",'css/blue.css');
    });

    // scroll hacia arriba de la web

    $('.subir').click(function(e){

        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;

    });

    // guardar la info del usuario

    $('#login form').submit(function(){

        var nombre = $('#name').val();
        var email = $('#email').val();
        var pass = $('#password').val();

        localStorage.setItem("name",nombre);
        localStorage.setItem("email", email);
        localStorage.setItem("password", pass);

    });

    var form_name = localStorage.getItem("name");

    if(form_name){

        var descripcion = $('#about p');
        descripcion.html("<br/><strong>Bienvenido: "+form_name+"</strong>");
        descripcion.append('<br><a href="#" id="logout">Cerrar Sesión</a>')
        $('#login').hide();

    }else{
        descripcion.html("")
    }

    $('#logout').click(function(e){

        e.preventDefault();
        localStorage.clear();
        var log = $('#login');
        log.show();
        $(this).hide();
        $('#about p').html("")

    });

});
