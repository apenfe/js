'use strict'

console.log("Bienvenido al juego de la vida de Conway's");
console.log("¿Cuantas filas y columnas desea utilizar para construir su universo? ");

// leer las filas
var filas = document.getElementById("filas").value();
// -------------------------------
       
var generacion = 0;
var suma;
var columnas = filas;
int[][] zepa = new int[filas][columnas];
int[][] zepanew = new int[filas][columnas]; // Crea una nueva matriz para zepanew

inicializarZepa();
imprimirZepa();
actualizarZepa();
        
while(generacion<5){

    for (let i = 1; i < filas-1; i++) { 

        for (let j = 1; j < columnas-1; j++) {
                
            if(zepa[i][j]==1){
                suma=-1;
            } else {
                suma=0;
            }

            for ( let a = i-1; a < i+2; a++) { 

                for (let b = j-1; b < j+2; b++) {

                    suma=suma+zepa[a][b]; 
                }
            }

            if(zepa[i][j]==0 && suma==3) {
                zepanew[i][j]=1;
            } else if (zepa[i][j]==1 && (suma<2 || suma>3)) {
                zepanew[i][j]=0;
            } else {
                zepanew[i][j]=zepa[i][j]  ;
            }            
        }
    }

    generacion++;
           
    imprimirZepa();
    actualizarZepa();
}

function imprimirZepa(){

    console.log("Generación: "+generacion);

    for (let i = 0; i < filas; i++) { 

        for (let j = 0; j < columnas; j++) {

            if(zepa[i][j]==1){
                console.log("*");
            }
            else{
                console.log(" ");
            }
        }

        console.log("");  // ver como representarlo
    }

}

function actualizarZepa(){

    for (let i = 0; i < filas; i++) {

        for (let j = 0; j < columnas; j++) {
            zepa[i][j] = zepanew[i][j];
        }

    }

}

function inicializarZepa(){

    for (let i =0; i<filas; i++){

        for (let j =0; j<columnas; j++){

           let celula = (Math.random()*1);

           if (celula<0.92) {

               zepa[i][j]=0;

           } else {
               zepa[i][j]=1;
           }

        }

    }

}
