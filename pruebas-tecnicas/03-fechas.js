'use strict'

/*

Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/

function diferenciaDias(fecha1, fecha2){

    fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
    fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);

    var difMilis = Math.abs(fecha2.getTime() - fecha1.getTime());

    return Math.floor(difMilis / 86400000);

}

alert(diferenciaDias('May 11, 1995', 'Jul 28, 2024'));