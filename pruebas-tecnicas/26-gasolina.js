/*
 
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio 
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve: 
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994 
No te sale a cuenta ser socio ser socio  
 
*/

function deboSerSocio(num){

    const precio = 10;

    var individual = num * precio;

    var socio = 90;

    var descuento = 0.78;
    var veces = 0;

    for (let i = 0; i < num; i++) {
        socio += precio * descuento; 
        descuento = Math.max(descuento * 0.78, 0.5); // El descuento disminuye y se detiene en 50%
    }

    console.log("Como usuario casual te sale a: "+individual);
    console.log("Como socio te sale a: "+socio);

    if(individual > socio){
        console.log("Merece la pena ser socio");
    }else if(individual < socio){
        console.log("No Merece la pena ser socio");
    }else{
        console.log("Costaria lo mismo ser socio o no");
    }

}

deboSerSocio(19);