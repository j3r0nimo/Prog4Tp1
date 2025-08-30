import { Empleado } from "./empleado"

export class EmpleadoTiempoCompleto extends Empleado {
    calcularSalario(): number {
        return this.getSalarioBase() + 20000;
    }
}