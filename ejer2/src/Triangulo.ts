import {FiguraGeometrica} from './Figura';

export class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;
    constructor(nombre: string, base: number, altura: number) {
        super(nombre);
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