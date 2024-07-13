'use strict'

// captura de errores con try catch

try{
    var year = 2019;
    var url = decodeURIComponent("https://v€%ctorroblesweb.es");
    console.log(url);
}catch(error){
    alert(error);
    console.log(error);
}

