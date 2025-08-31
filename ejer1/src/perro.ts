import { Animal } from "./animal";

export class Perro implements Animal{
    hacerSonido(){
        console.log("Guau!");
    }
    moverse(): void {
        console.log("el perro se mueve");
    }

}