'use strict'

var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

console.log("numero 1: "+numero1+", el numero 2: "+numero2);

var plantilla = `La suma es: ${numero1+numero2}
La resta es: ${numero1-numero2}
La multiplicacion es: ${numero1*numero2}
La division es: ${numero1/numero2}`;

console.log(plantilla);