// import { camiseta } from "./05-camiseta";

class Main{

    constructor(){
        console.log("Aplicacion JS cargada!");
    }

    getCamiseta(){
     //   return new camiseta("rojo","short","dango",45);
    }

}

var main = new Main();

var prenda = main.getCamiseta();
console.log(prenda);