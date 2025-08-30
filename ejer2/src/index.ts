import {Figura} from './Figura.js'
import {Circulo} from './Circulo.js'
import {Rectangulo} from './Rectangulo.js'
import {Triangulo} from './Triangulo.js'

const figuras: Figura[] = [];

figuras.push(new Circulo(5));
figuras.push(new Rectangulo(3, 4));
figuras.push(new Triangulo(3, 4));

figuras.forEach((figura) => {
    console.log(`El area de ${figura.getNombre()} es ${figura.calcularArea()}`);
    console.log(`El perimetro de ${figura.getNombre()} es ${figura.calcularPerimetro()}`);
});