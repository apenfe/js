'use strict'

/*
Un artículo tiene un nombre, un proveedor y un precio. Y un proveedor tiene un nombre, 
email y telefono. Se pide definir una clase (Proveedor) para implementar el objeto 
proveedor y otra (Articulo) para el obejto artículo. Este objeto tiene los siguientes 
atributos o propiedades:

proveedor: un objeto proveedor, a quien se compra el artículo
nombre: una cadena, nombre del artículo
precio: un número, precio del artículo
Y métodos:

telefono(): devuelve un objeto con el nombre y teléfono del proveedor
Por su parte el objeto proveedor tiene como propiedades

nombre: cadena de texto, nombre del proveedor
email: un email, correo del proveedor
teléfono: una cadena de dígitos, teléfono del proveedor
Puedes implementarlo con create, function o con class

Por ejemplo podríamos tener un artículo monitor que vale 200€ y el proveedor es TecnoShop, 
con email: tcn@tecno.com y telefono 1234567.

Si hacemos articulo.telefono() nos dará  nombre y teléfono del proveedor: Teléfono de TenoShop 
es 1234567
*/

class Proveedor{

    constructor(nombre,email,telefono){
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
    }

}

class Articulo{

    constructor(nombre, precio, nombreProveedor, email, telefono){
        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = new Proveedor(nombreProveedor,email,telefono);
    }

    telefono = function(){
        return this.proveedor.nombre +" - "+ this.proveedor.telefono;
    }

}

var articulo = new Articulo("monitor", 200, "TecnoShop", "tcn@tecno.com", 1234567);

console.log(articulo.telefono());