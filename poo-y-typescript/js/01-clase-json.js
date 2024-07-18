console.log("clase js");

var bicicleta = {
    color: "rojo",
    modelo: "bmx",
    frenos: "disco",
    velocidadMaxima: '60 km/h',
    cambiaColor: function(nuevo_color){
        bicicleta.color = nuevo_color;
        console.log(this);
    }
};

console.log(bicicleta);

bicicleta.cambiaColor("azul");
