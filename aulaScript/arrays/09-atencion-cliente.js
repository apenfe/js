'use strict'

/*
Un servicio de atención al ciente tiene establecido turnos semanales para sus 
empleados de manera que cada día de la semana se encarga del servicio  una persona: 
lunes - María, Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.

Usa un array para almacenar los datos del servicio. En este array cada elemento 
será un par día - nombre.

Crea una función que responda con el nombre de la persona encargada del servicio 
sabiendo el día. Si el día no existe deberá decir que no hay servicio. Los nombres 
de los días deben ir en minúsculas.

Si le pido servicio('Lunes') me debería decir "Este día se encarga María" y si le 
pido servico(Miércoles") me daría Antonia.
*/

var organigrama = [['lunes','maria'],['martes','luis'],['miercoles','antonia'],['jueves','pedro'],['viernes','marisa']];

var dia = "Lunes";

dia = dia.toLowerCase();

for(let i=0; i<organigrama.length;i++){

    if(organigrama[i][0]==dia){
        alert("Este día se encarga "+organigrama[i][1]);
    }
}