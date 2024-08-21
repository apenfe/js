/*
 
Enunciado Ejercicio 66:
Crea una función que pueda filtrar la información de los superhéroes por afiliación. 
Puedes hacer que la función tome una afiliación como parámetro 
y muestre la información de los superhéroes que pertenecen a esa afiliación.
 
Ejemplos:
filtrarPorAfiliacion('Crimen organizado')
 
*/

function filtrarPorAfiliacion(afiliacion){

    let salida = [];

    Object.keys(infoSuperheroes).forEach((nombre) => {

        let heroeActual = infoSuperheroes[nombre];

        if(heroeActual.afiliacion === afiliacion){
            salida.push(heroeActual);
        }
        
    });

    return salida;

}

const infoSuperheroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
        afiliacion: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        afiliacion: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        afiliacion: 'Crimen organizado'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        afiliacion: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        afiliacion: 'Crimen organizado'
    }
};

let solucion = filtrarPorAfiliacion('Crimen organizado');
console.log(solucion);