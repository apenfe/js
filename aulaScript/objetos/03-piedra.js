'use strict'

/*
En esta propuesta debes crear una clase de nombre piedra 
(con class o con function) con dos propiedades: masa, volumen 
y un método densidad que calcule este valor (masa/volumen). 
Luego instancia al menos un objeto de esta clase, dale un valor 
a su masa y a su volumen y ejecuta el método densidad.

Por ejemplo objeto oro, masa de la muestra 194 gr y volumen 10 cc. 
Densidad deberá devolver 19,4.
*/

class piedra {

    constructor(m,v){

       this.masa = m;
       this.volumen = v;

    }

   densidad = function(){

        return this.masa/this.volumen

    }

}

var oro = new piedra(194,10);
console.log("densidad "+oro.densidad());

