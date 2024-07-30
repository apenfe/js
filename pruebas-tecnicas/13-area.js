/*
 
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27
 
*/

function calcularAreaPoligono(objeto){

    if(objeto.tipo == 'triangulo'){

        return (objeto.base * objeto.altura) / 2;

    }else if(objeto.tipo == 'cuadrado'){

        return (objeto.base * objeto.base);

    }else if(objeto.tipo == 'rectangulo'){

        return (objeto.base * objeto.altura);

    }else{

        return null;

    }

}

console.log('El area del poligono es: '+calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }));