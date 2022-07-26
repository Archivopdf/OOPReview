import { Triangle } from "./triangle";
import { Punto } from "./punto"
let punto1 = new Punto(2, 2);
let punto2 = new Punto(3, 3);
let punto3 = new Punto(5, 5);

let triangulo = new Triangle(punto1, punto2, punto3);


console.log(triangulo.calcularLongitudLados());