import { Punto } from "./punto"


let coordenadas = new Punto(2, 2);
let coordenadas2 = new Punto(2, 4);

let conjuntocoordenadas = [coordenadas, coordenadas2];

coordenadas.setX(3);
coordenadas.setY(3);
coordenadas.getX();
coordenadas.getY();

console.log(coordenadas.distanciaAlOrigen());

console.log(coordenadas.calcularDistancia(new Punto(2, 3)));

console.log(coordenadas.calcularCuadrante());

console.log(calcularMasCercano(conjuntocoordenadas))