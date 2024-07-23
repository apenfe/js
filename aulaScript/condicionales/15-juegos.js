'use strict'

/*
En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual.
Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las 
tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.
*/

var creditos = 4;

if(creditos == 4){
    console.log("puede acceder a todo");
}else if(creditos == 3){
    console.log("solo puede acceder a las tres primeras");
}else if(creditos == 2){
    console.log("solo puede acceder a las dos primeras");
}else if(creditos == 1){
    console.log("solo puede acceder a una");
}else{
    console.log("No puede hacer uso de ninguna");
}