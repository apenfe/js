'use strict'

/*
Escribir un script para determinar si el numero introducido por el usuario es un palíndromo,
 es decir, un número que se lee igual del derecho que del revés.

Para invertir el número podéis hacer sucesivas divisiones entre 10: el resto lo añadis al 
inveso multiplicado por 10. Y repetis con el valor entero del numero dividido por 10.

Si escribo el número 12421 me dirá que "12421 es un palíndromo"

No vale usar strings, solo las operaciones matemáticas necesarias con el número.
*/

let numero, inverso=0, copia, resto;

numero = parseInt(prompt("teclear el numero: "));

copia = numero;

do {    

   resto = copia % 10;    
   inverso = inverso * 10 + resto;    
   copia = parseInt(copia/10);  

} while(copia != 0); 

if (inverso == numero){

    alert(numero+" es palindromo ");

}else{

    alert(numero+" no es palindromo ");
    
}