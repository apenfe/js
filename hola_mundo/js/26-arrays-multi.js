'use strict'

var categorias = ['accion','terror','comedia'];
var peliculas = ['rey leon','gran torino','pocahontas'];

var cine = [categorias,peliculas];

console.log(cine);

console.log(cine[0][1]);
console.log(cine[1][2]);

peliculas.push('batman');
console.log(peliculas);

peliculas.pop();
console.log(peliculas);

var indice = peliculas.indexOf('gran torino');
if(indice> -1){
    peliculas.splice(indice,1);
}
console.log(peliculas);

var texto = peliculas.join();
console.log(texto);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ")
console.log(cadena_array);

peliculas.sort();
console.log(peliculas);

peliculas.reverse();
console.log(peliculas);