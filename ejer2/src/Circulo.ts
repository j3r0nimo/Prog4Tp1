import {FiguraGeometrica} from './Figura'

export class Circulo extends FiguraGeometrica {
    private radio: number

    constructor(nombre: string, radio: number) {
        super(nombre);
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}