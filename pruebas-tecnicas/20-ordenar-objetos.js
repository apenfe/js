/*
 
Enunciado Ejercicio 20:
Crea una función que ordene un array de objetos en base a las propiedades
que le pase por parametro.
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
 
Ejemplos:
ordenarObjetos(usuarios, "edad");
 
*/

const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];

function ordenarObjetos(usurarios, campo){

  return usurarios.sort((a,b) => {

    if(typeof a[campo] == "number"){
      return a[campo] - b[campo];
    }

    if(typeof a[campo] == "string"){
      return a[campo].localeCompare(b[campo]);
    }

  });

}

var ordenados = ordenarObjetos(usuarios, "nombre");

console.log(ordenados);