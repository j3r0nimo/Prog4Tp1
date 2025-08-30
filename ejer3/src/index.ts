import { Empleado } from "./empleado";
import { EmpleadoMedioTiempo } from "./empleadoMedioTiempo";
import { EmpleadoTiempoCompleto } from "./empleadoTiempoCompleto";

const empleados: Empleado[] = [
    new EmpleadoTiempoCompleto('Juan', 50000),
    new EmpleadoTiempoCompleto('María', 60000),
    new EmpleadoMedioTiempo('Ana', 40000),
    new EmpleadoMedioTiempo('Luis', 35000),
] 

for (const empleado of empleados) {
    console.log(`Empleado: ${empleado.getNombre()}, Salario: ${empleado.calcularSalario()}`);
}