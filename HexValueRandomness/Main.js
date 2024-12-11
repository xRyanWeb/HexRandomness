"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var numOfItems = parseInt(readline.question("Enter Number of Items: "));
for (var i = 0; i < numOfItems; i++) {
    var randomNum = Math.floor(Math.random() * 0xffffff).toString(16);
    console.log(randomNum);
}
