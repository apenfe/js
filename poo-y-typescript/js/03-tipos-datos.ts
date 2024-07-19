
// string
var cadena: string | number = "Adrian Peñalver"; // con la tuberia puedo poner esos dos tipos

// number

var numero: number = 12;

// boleano

var verdadero_falso: boolean = true;

// any

var cualquiera: any = "hola";

var years: number[] = [12,23,45];

cualquiera = 3;

// arrays

var lenguajes: Array<string> = ["PHP","Laravel"];

console.log(cadena,numero,verdadero_falso,cualquiera);

// tipos de datos personalizados

type letrasobooleanos = string | boolean;

var mio: letrasobooleanos = true;