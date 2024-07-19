// import { camiseta } from "./05-camiseta";
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion JS cargada!");
    }
    Main.prototype.getCamiseta = function () {
        //   return new camiseta("rojo","short","dango",45);
    };
    return Main;
}());
var main = new Main();
var prenda = main.getCamiseta();
console.log(prenda);
