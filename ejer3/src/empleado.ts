export abstract class Empleado {
    constructor(
        protected nombre:string,
        protected salarioBase: number
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