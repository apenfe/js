'use strict'

window.addEventListener('load', function(){

    console.log("DOM cargado");
    var formulario = document.querySelector("#formulario");
    var caja = document.querySelector(".dashed");
    caja.style.display = "none";

    // evento click
    formulario.addEventListener('submit', function(){

        console.log("evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){

            alert("El nombre no es valido.");
            var e_nombre = document.querySelector("#error_nombre");
            e_nombre.style.display = "block";
            e_nombre.textContent = "Error al insertar nombre";
            e_nombre.style.background = "red";
            return false;

        }else{

            var e_nombre = document.querySelector("#error_nombre");
            e_nombre.style.display = "none";

        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){

            alert("Los apellidos no son validos.");
            var e_apellidos = document.querySelector("#error_apellidos");
            e_apellidos.style.display = "block";
            e_apellidos.textContent = "Error al insertar apellidos";
            e_apellidos.style.background = "red";
            return false;

        }else{

            var e_apellidos = document.querySelector("#error_apellidos");
            e_apellidos.style.display = "none";

        }

        if(edad == null || edad<=0 || edad>100 || isNaN(edad)){

            alert("La edad no es valida");
            var e_edad = document.querySelector("#error_edad");
            e_edad.style.display = "block";
            e_edad.textContent = "Error al insertar edad";
            e_edad.style.background = "red";
            return false;

        }else{

            var e_edad = document.querySelector("#error_edad");
            e_edad.style.display = "none";

        }

        var datos = [nombre,apellidos,edad];

        var parrafo = document.createElement("p");
        caja.style.display = "block";

        for(let indice in datos){
            
            parrafo.append(datos[indice]);
            parrafo.append(document.createElement("br"));
            
        }

        caja.append(parrafo);
        
    });

});