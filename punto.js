"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        console.log("(" + this.x + "," + this.y + ")");
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.getX = function () {
        console.log(this.x);
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.getY = function () {
        console.log(this.y);
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var ox = 0;
        var oy = 0;
        ox = ox - (this.x);
        oy = oy - (this.y);
        var oo = [ox, oy];
        return oo;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var px = otroPunto[0];
        var py = otroPunto[1];
        px = this.x - (px);
        py = this.y - (py);
        var dp = [px, py];
        return dp;
    };
    Punto.prototype.calcularCuadrante = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        for (var i = 0; i < puntos.length; i++) {
            for (var j = 0; j < puntos.length - i - 1; i++) {
                if (this.calcularDistancia(puntos[j]) > this.calcularDistancia(puntos[j + 1])) {
                    var lejano = puntos[j];
                    puntos[j] = puntos[j + 1];
                    puntos[j + 1] = lejano;
                }
            }
        }
    };
    return Punto;
}());
exports.Punto = Punto;
