export class Punto {

    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString(): void {
        console.log("(" + this.x + "," + this.y + ")")
    }

    public setX(x: number): void {
        this.x = x;
    }
    public getX(): void {
        console.log(this.x);

    }

    public setY(y: number): void {
        this.y = y;
    }
    public getY(): void {
        console.log(this.y);

    }

    public distanciaAlOrigen(): number[] {
        let ox = 0;
        let oy = 0;
        ox = ox - (this.x);
        oy = oy - (this.y);
        let oo = [ox, oy];
        return oo
    }

    public calcularDistancia(otroPunto: Punto): number[] {
        let px = otroPunto[0];
        let py = otroPunto[1];
        px = this.x - (px);
        py = this.y - (py);
        let dp = [px, py];
        return dp
    }

    public calcularCuadrante(): number {

        if (this.x == 0 || this.y == 0) {

            return 0;

        } else if (this.x > 0 && this.y > 0) {

            return 1;

        } else if (this.x < 0 && this.y > 0) {

            return 2;

        } else if (this.x < 0 && this.y < 0) {

            return 3;

        } else if (this.x > 0 && this.y < 0) {

            return 4;

        }
    }

    calcularMasCercano(puntos: Punto[]): void {
        for (let i = 0; i < puntos.length; i++) {

            for (let j = 0; j < puntos.length - i - 1; i++) {

                if (this.calcularDistancia(puntos[j]) > this.calcularDistancia(puntos[j + 1])) {
                    let lejano: Punto = puntos[j];

                    puntos[j] = puntos[j + 1];
                    puntos[j + 1] = lejano;
                }
            }
        }
    }


}