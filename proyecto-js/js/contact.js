$(document).ready(function () {

   if(window.location.href.indexOf('contact') > -1){

        $('form input[name="date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });

        // validacion 
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            srcrollToTopOnError: true
        });

    }

});