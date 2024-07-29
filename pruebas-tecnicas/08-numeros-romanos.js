/*

Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
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

enteroARomano(100); // Resultado:  C
enteroARomano(345); // Resultado: CCCXLV
console.log(enteroARomano(100));
console.log(enteroARomano(345));

for(let i =0; i<=100; i++){
    console.log(enteroARomano(i));
}