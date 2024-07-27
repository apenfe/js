'use strict'

/*
Crea un array booleano con dos valores 'verdadero' y 'falso'. 
Este array te sirve para traduicr los valores true y false. 
Usalo para que el script muestre un alert con el nombre vedadero 
si un usuario teclea un valor entre 0 y 9 y falso en el caso contrario.
*/

var respuestas = ["verdadero","falso"];

var num = 10;

if(num>=0 && num<=9){
    alert(respuestas[0]);
}else{
    alert(respuestas[1]);
}