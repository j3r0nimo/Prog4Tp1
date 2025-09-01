//clase abstracta

export abstract class FiguraGeometrica {
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