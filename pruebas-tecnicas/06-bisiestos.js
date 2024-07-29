/*
 
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

function bisiestos(currentYear){

    for(let i = currentYear ; i<= currentYear+30; i++){

        if(i%4 == 0 || (i%100 ==  0 && i% 400==0)){
            console.log(i);
        }

    }

}

bisiestos(2024);