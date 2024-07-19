// interfaz

interface camisetaBase{
    setColor(color);
    getColor();
}

// Decorador 

function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function(): void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}

// clase (molde)
@estampar('gucci')
class camiseta implements camisetaBase{

    // propiedades / atributos

    private color: string;
    private modelo: string;
    private marca: string;
    private precio: number;

    // constructor
    constructor(color,modelo,marca,precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
    }

    // metodos / funciones
    public setColor(color: string){
        this.color = color;
    }

    public setModelo(modelo: string){
        this.modelo = modelo;
    }

    public setMarca(marca: string){
        this.marca = marca;
    }

    public setPrecio(precio:number){
        this.precio = precio;
    }

    public getColor(): string{
        return this.color;
    }

    public getModelo(): string{
        return this.modelo;
    }

    public getMarca(): string{
        return this.marca;
    }

    public getPrecio(): number{
        return this.precio;
    }

}

// clase hija

class Sudadera extends camiseta{

    public capucha: boolean;

    constructor(capucha){
        super("null","null","null",0);
        this.capucha = capucha;
    }

    public setCapucha(capucha){
        this.capucha=capucha;
    }

    public getCapucha(): boolean{
        return this.capucha;
    }

}

var miCamiseta = new camiseta("azul","short","adidas",45);

console.log(miCamiseta.getColor());
console.log(miCamiseta.getModelo());
console.log(miCamiseta.getMarca());
console.log(miCamiseta.getPrecio());

miCamiseta.setColor("rojo");
miCamiseta.setModelo("generica");
miCamiseta.setMarca("nike");
miCamiseta.setPrecio(25);

(miCamiseta as any).estampacion();

console.log(miCamiseta);

var sudadera = new Sudadera(true);
sudadera.setCapucha(true);
console.log(sudadera);