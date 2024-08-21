/*
 
Enunciado Ejercicio 64:
Crea un programa que compruebe si los paréntesis, llaves y corchetes 
de una expresión están equilibrados, es decir, que estos delimitadores 
se abren y cieran de forma adecuada.
 
Ejemplos:
expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }');  // imprime true
expresionEquilibrada('{ x * ( y + z ) ] + 12 }');  // imprime false
*/

function expresionEquilibrada(expresion){

    let corchetes = 0;
    let parentesis = 0;
    let llaves = 0;

    for(let i= 0; i<expresion.length; i++){

        let actual = expresion[i];

        if(actual == "{" || actual == "(" || actual == "["){

            if(actual == "{" ){
                llaves++;
            }else if(actual == "(" ){
                parentesis++;
            }else{
                corchetes++;
            }

        }else if(actual == "}" || actual == ")" || actual == "]"){

            if(actual == "}" ){
                llaves--;
            }else if(actual == ")" ){
                parentesis--;
            }else{
                corchetes--;
            }

        }

    }

    return !(corchetes!=0 || parentesis!=0 || llaves!=0);

}

console.log(expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }')); // true
console.log(expresionEquilibrada('{ x * ( y + z ) ] + 12 }')); // false