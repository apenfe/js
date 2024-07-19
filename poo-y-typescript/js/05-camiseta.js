// interfaz
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// clase (molde)
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
// clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(capucha) {
        var _this = _super.call(this, "null", "null", "null", 0) || this;
        _this.capucha = capucha;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(camiseta));
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
var sudadera = new Sudadera(true);
sudadera.setCapucha(true);
console.log(sudadera);
