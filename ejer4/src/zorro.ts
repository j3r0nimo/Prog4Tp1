import { Animal } from "./animal";

export class Zorro extends Animal {
    constructor(nombre: string, public especie: string){
        super(nombre)
    }

    hacerSonido(): void {
        console.log(`El sonido que hace el ${this.especie} suena a ¡Wee wiii wee!`)
    }
}