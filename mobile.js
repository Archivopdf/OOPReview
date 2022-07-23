"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile() {
        // (name: string, model: string, trademark: string,
        // sdSize: number, is5G: boolean, color: string, 
        // cameraNumber: number, price: number)
    }
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setsdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.setcolor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setis5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.setcameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.setprice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getName = function () {
        console.log(this.name);
    };
    Mobile.prototype.getModel = function () {
        console.log(this.model);
    };
    Mobile.prototype.gettrademark = function () {
        console.log(this.trademark);
    };
    Mobile.prototype.getsdSize = function () {
        console.log(this.sdSize);
    };
    Mobile.prototype.getcolor = function () {
        console.log(this.color);
    };
    Mobile.prototype.getis5G = function () {
        console.log(this.is5G);
    };
    Mobile.prototype.getcameraNumber = function () {
        console.log(this.cameraNumber);
    };
    Mobile.prototype.getprice = function () {
        console.log(this.price);
    };
    Mobile.prototype.printAll = function () {
        console.log("Name - " + this.name + " Model - " + this.model +
            "Trademark - " + this.trademark + " sdSize - " + this.sdSize +
            " Color - " + this.color + " is5G - " + this.is5G +
            " CameraNumber - " + this.cameraNumber + " Price - " + this.price);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
