/*
En esta página tienes dos bloques div a modo de botones, 
como ves en este código HTML de abajo. Debes escribir una 
única función Javascript (llamada pulsar) para manejar los 
eventos click de ambos botones. Cuando pulses con el ratón 
en cualquier botón deberá aparecer una ventana alert indicando 
el id del botón donde se ha pulsado.
*/


let btn1 = document.getElementById('boton1');
let btn2 = document.getElementById('boton2');

btn1.addEventListener('click', pulsar);
btn2.addEventListener('click', pulsar);

function pulsar(event){
    alert(event.currentTarget.id);
}
