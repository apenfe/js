'use strict'

/*
Usa el algoritmo de Euclides para diseñar una función que determine el máximo común divisor de dos números. Bueno este algoritmo es bien simple. Para clacular el mcd de A y B:

Si A = 0 entonces MCD(A,B)=B, ya que el MCD(0,B)=B, y podemos detenernos.  
Si B = 0 entonces MCD(A,B)=A, ya que el MCD(A,0)=A, y podemos detenernos.  
Calcula el resto de A/B
Asigna a A el valor de B
Asigna a B el resto
Repite hasta que A o B sean 0.
*/

function MCD(n1, n2){

    var mcd, resto;

    while (n1 != 0 && n2 != 0){

        resto = n1%n2;
        n1 = n2;
        n2 = resto;

    } 

    if(n1==0) mcd = n2;
    if(n2==0) mcd = n1;

    return mcd;

}

num1 = parseInt(prompt("Escribir un número"));
num2 = parseInt(prompt("Escribir otro número"));

alert("MCD de "+num1+" y "+num2 + " es "+ MCD(num1, num2));