import {Empleado} from "./empleado"

export class empleadoTiempoCompleto extends Empleado {
    constructor(
        nombre:string,
        salarioBase: number
    ){
        super(nombre, salarioBase);
    }
    calcularSalario(): number {
        return this.getSalarioBase() + 20000;
    }
}