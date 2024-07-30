window.addEventListener('load',asignar);

function asignar(){
    let bloque = document.getElementById('cuadro');
    bloque.addEventListener('mouseenter',ponRojo);
    bloque.addEventListener('mouseout',ponBlanco);
}

function ponRojo(){
    let cuadro = document.getElementById('cuadro')      
    cuadro.style.backgroundColor= 'red'
} 

function ponBlanco(){
    let cuadro = document.getElementById('cuadro')      
    cuadro.style.backgroundColor= 'white'
}