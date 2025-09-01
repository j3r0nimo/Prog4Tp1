import { Empleado } from "./empleado";

export class EmpleadoMedioTiempo extends Empleado {
    calcularSalario(): number {
        return this.getSalarioBase() / 2;
    }
}