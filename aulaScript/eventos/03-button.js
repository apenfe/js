/*
En esta págian web debes agregar un script para asignar un manejador 
de eventos al botón button. Este script deberá escribir en el campo 
total el valor de multiplicar los otros dos campos.
*/

let boton = document.getElementById('enviar');
let resdo = document.getElementById('total');

boton.addEventListener('click', multiplicar);

function multiplicar(){

   let precio = document.getElementById('precio').value;
   let cantidad = document.getElementById('cantidad').value;
   total.value = precio*cantidad;
   
}
