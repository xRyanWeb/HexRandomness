"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var readline = require("readline-sync");
var numOfItems = parseInt(readline.question("Enter Number of Items: "));
var Main = /** @class */ (function () {
    function Main() {
    }
    return Main;
}());
exports.Main = Main;
for (var i = 0; i < numOfItems; i++) {
    var randomNum = Math.floor(Math.random() * 0xffffff).toString(16);
    var randomRValue = Math.floor(Math.random() * 255);
    var randomGValue = Math.floor(Math.random() * 155);
    var randomBValue = Math.floor(Math.random() * 125);
    var red = (new Main().r = randomRValue);
    var green = (new Main().r = randomGValue);
    var blue = (new Main().r = randomBValue);
    console.log("Red Color: ".concat(red));
    console.log("Green Color: ".concat(green));
    console.log("Blue Color: ".concat(blue));
    console.log("Random Hex Color Code: ".concat(randomNum));
}
