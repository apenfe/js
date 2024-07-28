'use strict'

/*
En esta ocasión tienes una lista de clientes, cada cliente es un objeto con atributos: nombre, email, telefono.

Se quiere crear una clase Factura para gestionar las facturas emitidas a los clientes. Las propiedades de esta clase son

    idCliente: número de cliente (su lugar en la lista de clientes)
    total: número con el imorte total de la factura
    estado: pagada o pendiente

Los métodos serán

    cobrar(): pone el estado en pagada.
    imprimir(): imprime los datos de la factura

Para probar crea tres clieentes y al menos una factura.

-------------------------------------------------------------------------

Podemos tener los siguietnes clientes

Juan, juan#mail.com, 3456718
Marisa, marisa@mail.com, 5556123
Luis, luis@mail.com, 2354322
Emitimos una factura al cliente 1, o sea, a Juan. el importe es 300 euros. Si se imprime factura.estado saldrá "pendiente".

Depués de hacer factura.pagar() al imprimir factura.estado saldrá "pagada".
*/

class Cliente{

    constructor(nombre,email,telefono){
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
    }

}

class Factura{

    constructor(numCliente,importe){
        this.numCliente=numCliente;
        this.total=importe;
        this.estado = "pendiente";
    }

    cobrar = function(){
        this.estado='pagado';
    }

    imprimir = function(){

    }

}

var cliente1 = new Cliente("juan","juan@mail.com",3456718);
var cliente2 = new Cliente("marisa","marisa@mail.com",5556123);
var cliente3 = new Cliente("luis","juan@mail.com",2354322);

var clientes = [];
clientes.push(cliente1);
clientes.push(cliente2);
clientes.push(cliente3);

var factura1;

for(let i=0; i<clientes.length; i++){

    if(clientes[i].nombre == "juan"){
        factura1 = new Factura(i,300);
    }

}

console.log(factura1.estado);

factura1.cobrar();

console.log(factura1.estado);