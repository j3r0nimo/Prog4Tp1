import {FiguraGeometrica} from './Figura'
import {Circulo} from './Circulo'
import {Cuadrado} from './Cuadrado'
import {Triangulo} from './Triangulo'

const figuras: FiguraGeometrica[] = [];

figuras.push(new Circulo("Circulo de Viena", 5));
figuras.push(new Cuadrado("Cuadrado",4));
figuras.push(new Triangulo("Triangulo de las bermudas",3, 4));

figuras.forEach((figura) => {
    console.log(`El area de ${figura.getNombre()} es ${figura.calcularArea()}`);
    console.log(`El perimetro de ${figura.getNombre()} es ${figura.calcularPerimetro()}`);
});