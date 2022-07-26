"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(punto1, punto2, punto3) {
        this.vert1 = punto1;
        this.vert2 = punto2;
        this.vert3 = punto3;
    }
    Triangle.prototype.calcularLongitudLados = function () {
        var lado1_2 = this.vert1.calcularDistancia(this.vert2);
        var lado1_3 = this.vert1.calcularDistancia(this.vert3);
        var lado2_3 = this.vert2.calcularDistancia(this.vert2);
        var Lengthsides = new Array();
        Lengthsides.push(lado1_2);
        Lengthsides.push(lado1_3);
        Lengthsides.push(lado2_3);
        return Lengthsides;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
