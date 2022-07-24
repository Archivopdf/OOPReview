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

    public totalPriceCalculation(): number {

        for (let i = 0; i < this.mobiles.length; i++) {


        }
    }
}