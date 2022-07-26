import { Punto } from "./punto";

export class Triangle {
    private vert1: Punto;
    private vert2: Punto;
    private vert3: Punto;

    constructor(punto1, punto2, punto3) {
        this.vert1 = punto1;
        this.vert2 = punto2;
        this.vert3 = punto3;
    }

    public calcularLongitudLados(): number[] {
        let lado1_2 = this.vert1.calcularDistancia(this.vert2);
        let lado1_3 = this.vert1.calcularDistancia(this.vert3);
        let lado2_3 = this.vert2.calcularDistancia(this.vert2);

        let Lengthsides = new Array();
        Lengthsides.push(lado1_2);
        Lengthsides.push(lado1_3);
        Lengthsides.push(lado2_3);
        return Lengthsides
    }
}
