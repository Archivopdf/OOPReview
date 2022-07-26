"use strict";
exports.__esModule = true;
var triangle_1 = require("./triangle");
var punto_1 = require("./punto");
var punto1 = new punto_1.Punto(2, 2);
var punto2 = new punto_1.Punto(3, 3);
var punto3 = new punto_1.Punto(5, 5);
var triangulo = new triangle_1.Triangle(punto1, punto2, punto3);
console.log(triangulo.calcularLongitudLados());
