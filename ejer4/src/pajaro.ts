import { Volador } from "./volador";
import { Animal } from "./animal";


export class Pajaro extends Animal implements Volador {
    private especie: string;

    constructor (nombre: string, especie:string){
        super(nombre);
        this.especie = especie;
    }
    
    volar(): void {
        console.log(`${this.nombre} puede volar porque es un ${this.especie}`)
    }

    hacerSonido(): void {
        console.log(`El sonido que hace el ${this.especie} suena a ¡piiio pio!`)
    }
}