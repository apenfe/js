'use strict'

function calculadora(){
    return "hola soy la calculadora";
}

var resultado = calculadora();
console.log(resultado);

function porConsola(numero1,numero2){

    console.log(numero1+numero2);
    console.log(numero1-numero2);
    console.log(numero1*numero2);
    console.log(numero1/numero2);
    console.log("****************************");

}

function porPantalla(numero1,numero2){

    document.write((numero1+numero2 )+"<br/>");
    document.write((numero1-numero2)+"<br/>");
    document.write((numero1*numero2)+"<br/>");
    document.write((numero1/numero2)+"<br/>");
    document.write("****************************"+"<br/>");

}

function calculador(num1,num2,mostrar=false){

    if(mostrar==false){
        porConsola(num1,num2);
    }else{
        porPantalla(num1,num2);
    }
   
}

for(var i=1; i<=10;i++){
    calculador(i,8);
}

calculador(2,1,true);