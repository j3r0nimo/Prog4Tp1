import {Figura} from './Figura.js';

export class Triangulo extends Figura {
    private base: number;
    private altura: number;
    constructor(base: number, altura: number) {
        super("Triangulo");
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro(): number {
        return this.base + this.altura + Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.altura, 2));
    }
    
}