export abstract class Empleado {
    constructor(
        private nombre:string,
        private salarioBase: number
    ){
        nombre = this.nombre;
        salarioBase = this.salarioBase;
    }

    getNombre(): string {
        return this.nombre;
    }
    getSalarioBase(): number {
        return this.salarioBase;
    }

    abstract calcularSalario(): number;
}