interface CocheBase{
    getModelo(): string;
    getColor(): string;
}

class Coche implements CocheBase{

    private color: string;
    private modelo: string;
    private velocidad: number;

    constructor(modelo:any = null){

        this.velocidad = 0;
        this.color = "blanco";

        if(modelo == null){
            this.modelo = "bmw generico";
        }else{
            this.modelo = modelo;
        }

    }

    public getColor(): string{
        return this.color;
    }

    public getModelo(): string{
        return this.modelo;
    }

    public getVelocidad(): number{
        return this.velocidad;
    }

    public setColor(color: string){
        this.color = color;
    }

    public setModelo(modelo: string){
        this.modelo = modelo;
    }

    public setVelocidad(velocidad: number){
        this.velocidad = this.velocidad;
    }

    public acelerar(){
        this.velocidad ++;
    }

    public frenar(){
        this.velocidad --;
    }

}

var coche = new Coche("Renault");
var coche2 = new Coche();
var coche3 = new Coche();

coche.setColor("rojo");
coche2.setColor("azul");
coche3.setColor("verde");

console.log("El color del coche es: " + coche.getColor());
console.log("El color del coche2 es: " + coche2.getColor());
console.log("El color del coche3 es: " + coche3.getColor());

console.log("El modelo del coche es: " + coche.getModelo());

coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log("La velocidad es de: "+ coche.getVelocidad()+ " km/h");