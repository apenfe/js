'use strict'

/*
Escribe una función que pueda devolver el valor más pequeño de un array numérico 
o el índice de ese valor. El segundo parámetro de la función dirá si debe devolver 
el valor ("v") o el índice ("i"). No uses métodos del objeto array.

Se supone que el primer parámetro siempre será una matriz llena con al menos 1 
número y sin duplicados.

Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'

min([4,5,7], 'v')  devolverá 4, mientras que min([4,5,7], 'i') devolverá 0.
*/

function menorValor(array,salida){

    salida = salida.toLowerCase();

    let min = Number.MAX_VALUE;

    if(salida == 'v'){

        for(let i=0; i<array.length; i++){

            if(array[i]<min){
                min=array[i];
            }

        }
        
        return min;

    }else if( salida == 'i'){

        for(let i=0; i<array.length; i++){

            if(array[i]<min){
                min= i;
            }

        }

        return min;

    }else{
        
        return null;

    }

}

alert(menorValor([4,5,7], 'v'));
alert(menorValor([4,5,7], 'i'));