'use script'

/*
En este ejercicio mezclamos bucles con condicionales: 
el usuario escribe un número y el script imprimirá (console.log)
 todos los números menores que al dividirlos por 3 den como resto 2.

Recuerda: un número es múltiplo de N cuando el dividirlo por N el resto es 0.
*/

var num = parseInt(prompt("Número máximo "));

for (let i = 0; i < num; i++)
{
    if( i % 3 == 2){
        console.log(i);
    }
}