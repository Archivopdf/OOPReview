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
    return Punto;
}());
exports.Punto = Punto;
