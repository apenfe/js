'use strict'

// tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("Numero de tabla: "));

for(let i=0; i<=10; i++){
    console.log(i+" x "+numero+" = "+(numero*i));
}

for(let i=1; i<=10; i++){

    document.write("<h2>Tabla del "+i+"</h2><br/>");

    for(let j=0; j<=10; j++){

        document.write("<h3>"+i+" x "+j+" = "+(j*i)+"</h3>");
    }
}