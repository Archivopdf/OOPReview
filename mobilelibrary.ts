import { Mobile } from "./Mobile";

export class MobileLibrary {

    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(name: string, location: string, mobiles: Mobile[]) {

        this.mobiles = [];
    }

    public setName(name: string): void {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }

    public setLocation(location: string): void {
        this.location = location;
    }
    public getLocation(): string {
        return this.location;
    }

    public setMobile(mobile: Mobile): void {
        this.mobiles.push(mobile)
    }
    public getMobile(): void {
        console.log(JSON.stringify(this.mobiles));

    }

    public totalPriceCalculation(mobiles: Mobile[]): number {

        let sumPrice = 0;

        for (let i = 0; i < this.mobiles.length; i++) {

            sumPrice += this.mobiles[i].getprice()

        }
        return sumPrice
    }

    public printLibrary(): void {
        console.log("This is all my mobiles: " + this.mobiles);

        for (let i = 0; i < this.mobiles.length; i++) {
            console.log("Name: " + this.mobiles[i].getName +
                "Model: " + this.mobiles[i].getModel +
                "Trademark: " + this.mobiles[i].gettrademark +
                "SD Size: " + this.mobiles[i].getsdSize +
                "Color: " + this.mobiles[i].getcolor +
                "Is 5G: " + this.mobiles[i].getis5G +
                "Number of Cameras: " + this.mobiles[i].getcameraNumber
            );

        }
        console.log("Price overall: " + totalPriceCalculation(this.mobiles));

    }
}