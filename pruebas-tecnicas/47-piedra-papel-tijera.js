/*

Enunciado Ejercicio 47:
Crea un simulador de pieda, papel o tijera.
 
El resultado podrá ser: "Jugador 1", Jugador 2" o "Empate"
 
Ejemplos:
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]]); 
// Devuelve: "Jugador 2"
 
quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]); 
// Devuelve: "Empate"
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]); 
// Devuelve "Jugador 1"
*/

function quienGana(jugadas){

    let uno = 0;
    let dos = 0;

    for(let i=0; i < jugadas.length; i++){

        if(jugadas[i][0] == jugadas[i][1]){

            continue;

        }else{

            if(jugadas[i][0] == "PIEDRA" && jugadas[i][1] == "PAPEL"){

                dos++;

            }else if(jugadas[i][0] == "PIEDRA" && jugadas[i][1] == "TIJERA"){

                uno++;

            }else if(jugadas[i][0] == "PAPEL" && jugadas[i][1] == "PIEDRA"){

                uno++;
                
            }else if(jugadas[i][0] == "PAPEL" && jugadas[i][1] == "TIJERA"){

                dos++;
                
            }else if(jugadas[i][0] == "TIJERA" && jugadas[i][1] == "PIEDRA"){

                dos++;
                
            }else if(jugadas[i][0] == "TIJERA" && jugadas[i][1] == "PAPEL"){

                uno++;
                
            }

        }

    }

    if(uno > dos){
        return "Jugador 1";
    }else if(dos > uno){
        return "Jugador 2";
    }else{
        return "Empate";
    }

}

console.log(quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]])); 
// Devuelve: "Jugador 2"
 
console.log(quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]])); 
// Devuelve: "Empate"
 
console.log(quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]])); 
// Devuelve "Jugador 1"