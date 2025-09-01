import {Vehiculo} from "./vehiculo";
import {Electrico} from "./electrico";

export class Moto extends Vehiculo implements Electrico{
    andar(){
        console.log("andando en 2 ruedas");
    }
    cargarBateria() {
        console.log("cargando la bateria");
        
    }
}