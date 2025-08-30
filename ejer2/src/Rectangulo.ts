import {Figura} from './Figura.js'

export class Rectangulo extends Figura{
    private base: number;
    private altura: number;

    constructor(base: number, altura: number){
        super("Rectangulo");
        this.base = base;
        this.altura = altura;
    }
    calcularArea(): number{
        return this.base * this.altura;
    }
    calcularPerimetro(): number{
        return 2 * (this.base + this.altura);
    }
}