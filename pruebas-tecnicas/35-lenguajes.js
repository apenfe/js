/*
 
Enunciado Ejercicio 35:
Crea un programa que dados dos arrays de lenguajes frontend y backend
y dado un parametro que sera un array con los nombres de dos lenguajes
nos diga si son compatibles o no.
 
Solo pueden ser compatibles lenguajes front con uno de back
 
Ejemplos:
sonCompatibles(["HTML", "PHP"])   // true
sonCompatibles(["PHP", "PYTHON"]) // false
 
*/

function sonCompatibles(langs){

    let front = ['HTML','CSS','JS','VUE'];
    let back = ['PHP','LARAVEL','SQL','NODE','PYTHON'];

    if(front.indexOf(langs[0]) >= 0){
        
        if(back.indexOf(langs[1]) >= 0){
            
            return true;

        }

        return false;

    }

    return false;

}

console.log(sonCompatibles(["HTML", "PHP"]));  // true
console.log(sonCompatibles(["PHP", "PYTHON"])); // false

