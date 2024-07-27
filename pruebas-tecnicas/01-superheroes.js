/*
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/
 
// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
        equipo: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        equipo: 'Los vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        equipo: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        equipo: 'Los vengadores'
    }
};

function infoHeroes(busqueda){

    let salida = "";

    if(typeof(busqueda) == "string"){

        var encontrado = false;

        for(let key in infoSuperheroes){

            if(key == busqueda){

                var hero = infoSuperheroes[key];

                salida += "Nombre real: " + hero.nombreReal +"\n";
                salida += "Poderes: "+ hero.poderes +"\n";
                salida += "Equipo: " + hero.equipo;
                encontrado = true;

            }

        }

        if(!encontrado){
            salida += "No se encontraron coincidencias";
        }

    }else if(busqueda.length >=1){

        for(let i = 0; i<busqueda.length; i++){

            var encontrado = false;

            for(let key in infoSuperheroes){

                if(key == busqueda[i]){
    
                    var hero = infoSuperheroes[key];
    
                    salida += "Nombre real: " + hero.nombreReal +"\n";
                    salida += "Poderes: "+ hero.poderes +"\n";
                    salida += "Equipo: " + hero.equipo;
                    encontrado = true;
    
                }
    
            }
    
            if(!encontrado){
                salida += "No se encontraron coincidencias";
            }

            salida += "\n\n";

        }

    }else{

        salida += "No es una busqueda valida";
        
    }

    return salida;

}

alert(infoHeroes('Iron Man'));

alert(infoHeroes(['Iron Man','Thor']));

alert(infoHeroes(['Iron Man','thor']));

alert(infoHeroes(['Iron Man',3]));