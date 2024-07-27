'use strict'

/*
Construye una clase usando function para implementar una cuenta de efectivo. 
Poseerá dos propiedades: nombre del titular y saldo. Además debe tener dos 
métodos: ingresar() y retirar(). El primero incrementa el saldo en la cantidad 
indicada en el argumento y el segundo lo reduce. No se puede sacar más de lo que 
exista en el saldo.

A los métodos los invocaremos con las llamadas ingresar(1000) o retirar(100) 
Tras ingresar el saldo será 1000 y trs retirar el saldo será 900..
*/

class cuenta{

    constructor(nombre,saldo){

        this.nombre = nombre;
        this.saldo = saldo;

    }

    ingresar = function(aumento){
        this.saldo += aumento;
    }

    retirar = function(disminucion){

        if(this.saldo >= disminucion >=0){
            this.saldo -= disminucion;
        }

    }

}

var cuentaAdrian = new cuenta("adrian",0);

cuentaAdrian.ingresar(1000);
cuentaAdrian.retirar(100);

alert("El saldo es de: "+cuentaAdrian.saldo+" €");
