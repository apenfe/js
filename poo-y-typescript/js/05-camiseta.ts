// clase (molde)

export class camiseta{

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

var miCamiseta = new camiseta("azul","short","adidas",45);

console.log(miCamiseta.getColor());
console.log(miCamiseta.getModelo());
console.log(miCamiseta.getMarca());
console.log(miCamiseta.getPrecio());

miCamiseta.setColor("rojo");
miCamiseta.setModelo("generica");
miCamiseta.setMarca("nike");
miCamiseta.setPrecio(25);

console.log(miCamiseta);
