//clase abstracta

export abstract class Figura {
    protected nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    getNombre(): string {
        return this.nombre;
    }
    //metodos abstractos
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}