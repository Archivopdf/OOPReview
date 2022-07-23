export class Mobile {
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    constructor() {
        // (name: string, model: string, trademark: string,
        // sdSize: number, is5G: boolean, color: string, 
        // cameraNumber: number, price: number)

    }
    public setName(name: string): void {
        this.name = name
    }
    public setModel(model: string): void {
        this.model = model
    }
    public setTrademark(trademark: string): void {
        this.trademark = trademark
    }
    public setsdSize(sdSize: number): void {
        this.sdSize = sdSize
    }
    public setcolor(color: string): void {
        this.color = color
    }
    public setis5G(is5G: boolean): void {
        this.is5G = is5G
    }
    public setcameraNumber(cameraNumber: number): void {
        this.cameraNumber = cameraNumber
    }
    public setprice(price: number): void {
        this.price = price
    }
    public getName(): void {
        console.log(this.name);

    }
    public getModel(): void {
        console.log(this.model);

    }
    public gettrademark(): void {
        console.log(this.trademark);

    }
    public getsdSize(): void {
        console.log(this.sdSize);

    }
    public getcolor(): void {
        console.log(this.color);

    }
    public getis5G(): void {
        console.log(this.is5G);

    }
    public getcameraNumber(): void {
        console.log(this.cameraNumber);

    }
    public getprice(): void {
        console.log(this.price);

    }
    public printAll(): void {
        console.log(
            "The characteristics of the movile " + this.name + "are: " +
            "Name - " + this.name + " Model - " + this.model +
            "Trademark - " + this.trademark + " sdSize - " + this.sdSize +
            " Color - " + this.color + " is5G - " + this.is5G +
            " CameraNumber - " + this.cameraNumber + " Price - " + this.price
        );

    }

}