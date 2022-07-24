"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var coordenadas = new punto_1.Punto(2, 2);
coordenadas.setX(3);
coordenadas.setY(3);
coordenadas.getX();
coordenadas.getY();
console.log(coordenadas.distanciaAlOrigen());
