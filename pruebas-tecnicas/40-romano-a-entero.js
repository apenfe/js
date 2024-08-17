/*
 
Enunciado Ejercicio 40:
Crea una función que convierta un número romano a decimal.
 
Ejemplos:
romanoAEntero("XVIII")   // 18
romanoAEntero("CXX")     // 120
 
*/

function enteroARomano(entero){

    let cifras = numCifras(entero);
   
    var cifraActual = 1;

    let romanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let valores = [1,5,10,50,100,500,1000];

    var valor = 0;
    var salida = "";

    var contador = 1;

    do{

        cifraActual = Math.floor((entero-valor) / Math.pow(10,(cifras-contador))) * (Math.pow(10,(cifras-contador)));
      //  console.log("Cifra actual (INICIO): "+cifraActual)
        var normal = false;
        for(let i = 0; i< romanos.length; i++){

            if(valores[i]*3 == cifraActual && valores[i+1]*2 < cifraActual){

                valor += valores[i]*3;
                salida += romanos[i] + romanos[i] + romanos[i];
                normal = true;
                break;

            }else if(valores[i]*3 == cifraActual && valores[i+1]*2 > cifraActual){

                valor += valores[i]*3;
                salida += romanos[i] + romanos[i] + romanos[i];
                normal = true;
                break;

            }else if(valores[i]*2 == cifraActual && valores[i+1] > cifraActual){

                valor += valores[i]*2;
                salida += romanos[i] + romanos[i];
                normal = true;
                break;

            }else if(valores[i]*1 == cifraActual ){

                valor += valores[i]*1;
                salida += romanos[i];
                normal = true;
                break;
                
            }else if(cifraActual == 0){
                valor += 0;
                salida += "";
                normal = true;
                break;
            }

        }

        if(!normal){
           // console.log("no soy nomal")

            for(let i = 0; i< romanos.length; i++){

                if(valores[i] + valores[i-1] == cifraActual){
    
                    valor += valores[i] + valores[i-1];
                    salida += romanos[i] + romanos[i-1];
                    break;
    
                }else if(valores[i] + valores[i-1]*2 == cifraActual){
    
                    valor += valores[i] + valores[i-1]*2;
                    salida += romanos[i] + romanos[i-1] + romanos[i-1];
                    break;
    
                }else if(valores[i] + valores[i-1]*3 == cifraActual){
    
                    valor += valores[i] + valores[i-1]*3;
                    salida += romanos[i] + romanos[i-1] + romanos[i-1] + romanos[i-1];
                    break;
    
                }else if(valores[i+1] - valores[i-1] == cifraActual){
    
                    valor += valores[i+1] - valores[i-1];
                    salida += romanos[i-1] + romanos[i+1];
                    break;
                    
                }else if(valores[i] - valores[i-1] == cifraActual){
    
                    valor += valores[i] - valores[i-1];
                    salida += romanos[i-1] + romanos[i];
                    break;
                    
                }
    
            }

        }

       // console.log("-------------------------")
       // console.log("Cifra actual: "+cifraActual)
       // console.log("En romano es: "+salida)
      //  console.log("El valor es: "+valor);
      //  console.log("contador: "+contador)
      //  console.log("-------------------------")
        contador ++;


    }while(contador < 10);

    return salida;

}

function numCifras(entero){

    let cifras = 0;

    do{

        entero = entero / 10;
        cifras++;

    }while(entero >= 1);

    return cifras;

}

function romanoAEntero(romano){

    let romanos = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let valor = 0;

    for (let i = 0; i < romano.length; i++) { 

        let actual = romanos[romano[i]];
        let siguiente = romanos[romano[i + 1]];

        // Si el valor actual es menor que el siguiente, restamos el valor actual
        if (siguiente && actual < siguiente) {
            valor -= actual;
        } else {
            valor += actual;
        }
    }

    return valor;

}

for(let i = 1; i <= 100; i++){

    console.log(romanoAEntero(enteroARomano(i)));

}