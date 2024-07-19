var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "blanco";
        if (modelo == null) {
            this.modelo = "bmw generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = this.velocidad;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
var coche = new Coche("Renault");
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor("rojo");
coche2.setColor("azul");
coche3.setColor("verde");
console.log("El color del coche es: " + coche.getColor());
console.log("El color del coche2 es: " + coche2.getColor());
console.log("El color del coche3 es: " + coche3.getColor());
console.log("El modelo del coche es: " + coche.getModelo());
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("La velocidad es de: " + coche.getVelocidad() + " km/h");
