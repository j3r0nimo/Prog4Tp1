import {Figura} from './Figura.js'

export class Circulo extends Figura {
    private radio: number

    constructor(radio: number) {
        super("Circulo");
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}