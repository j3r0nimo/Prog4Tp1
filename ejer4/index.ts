import { Pajaro } from "./pajaro";
import { Zorro } from "./zorro";

const pipio: Pajaro = new Pajaro("Tito", "Ruiseñor");
const foxie: Zorro = new Zorro("Foxie", "Zorro");

pipio.volar();
pipio.hacerSonido();
foxie.hacerSonido();
