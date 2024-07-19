"use strict";
// clase (molde)
Object.defineProperty(exports, "__esModule", { value: true });
exports.camiseta = void 0;
var camiseta = /** @class */ (function () {
    // constructor
    function camiseta(color, modelo, marca, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
    }
    // metodos / funciones
    camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    camiseta.prototype.getColor = function () {
        return this.color;
    };
    camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    return camiseta;
}());
exports.camiseta = camiseta;
var miCamiseta = new camiseta("azul", "short", "adidas", 45);
console.log(miCamiseta.getColor());
console.log(miCamiseta.getModelo());
console.log(miCamiseta.getMarca());
console.log(miCamiseta.getPrecio());
miCamiseta.setColor("rojo");
miCamiseta.setModelo("generica");
miCamiseta.setMarca("nike");
miCamiseta.setPrecio(25);
console.log(miCamiseta);
