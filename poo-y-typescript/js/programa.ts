class Programa{

    public nombre: string;
    public version: number;

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    public getNombre(): string{
        return this.nombre;
    }

    public setVersion(version: number){
        this.version = version;
    }

    public getVersion(): number{
        return this.version;
    }

}

class EditorVideo extends Programa{

    public timeLine: number;

    public getTimeLine(): number{
        return this.timeLine;
    }

    public setTimeLine(timeLine: number){
        this.timeLine = timeLine;
    }

    public toString(): string{
        return this.getNombre() + ", Version " + this.getVersion() + ", timeline: " + this.getTimeLine();
    }

}

var editor = new EditorVideo();

editor.setVersion(8);
editor.setNombre("camtasia studio");
editor.setTimeLine(4000);

console.log(editor.toString());

// logica del formulario

var programas: Array<Programa>= [];

function guardar(){

    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);

    programas.push(programa);

    var list = "";

    for(var i = 0 ; i<programas.length ; i++){
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }

    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("nombre")).value = "";

}