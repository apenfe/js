/*
 
Enunciado Ejercicio 34:
Crea una función a la cual le pase un array y me devuelva 
un objeto con los elementos agrupados
 
Ejemplos:
agrupar([7.2, 5.3, 7.4], Math.floor)  
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }
 
agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length') 
// Devuelve: { 3: ['uno', 'dos', 'tres'], 6: ['cuatro'] }
 
agrupar([{nombre: "victor", edad: 33}, {nombre: "paco", edad: 44}], 'edad') 
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }
 
*/

function agrupar(datos, claveAgrupacion){

    // objeto vacio para llenarlo
    var resultado = {};

    // recorrer todos los elementos del array de datos
    datos.forEach(elemento => {

        let propiedad = typeof claveAgrupacion === "function";

        if(propiedad){

            propiedad = claveAgrupacion(elemento);

        }else{

            propiedad = elemento[claveAgrupacion];  // equivalente a elemento.length o elemento.length

        }

        if(!resultado[propiedad]){

            resultado[propiedad] = [];

        }

        resultado[propiedad].push(elemento);

    });

    return resultado;

}

console.log(agrupar([7.2, 5.3, 7.4], Math.floor));
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }
 
console.log(agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length'));
// Devuelve: { 3: ['uno', 'dos'], 4: ['tres'], 6: ['cuatro'] }
 
console.log(agrupar([{nombre: "victor", edad: 33}, {nombre: "paco", edad: 44}], 'edad'));
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }