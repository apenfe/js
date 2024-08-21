/*

Enunciado Ejercicio 65:
Dado un array de objetos de usuarios, con nombre y fecha,
crea una función que los ordene por fecha.
 
Ejemplos:
ordenarPorFecha(usuarios)
 
// Devolver solo nombre
*/

function ordenarPorFecha(usuarios){

    return usuarios.sort((a, b) => a.fecha - b.fecha);

}

const objetos = [
    {
      nombre: "Juan",
      fecha: new Date(1984, 7, 10),
    },
    {
      nombre: "Paco",
      fecha: new Date(2017, 8, 12),
    },
    {
      nombre: "Pepe",
      fecha: new Date(1991, 12, 6),
    },
  ]

let solucion = ordenarPorFecha(objetos);
console.log(solucion);