import * as readline from "readline-sync";

const numOfItems = parseInt(readline.question("Enter Number of Items: "));

export interface NumsRange {
  r: number;
}

export class Main implements NumsRange {
  r: number;
}

for (let i = 0; i < numOfItems; i++) {
  const randomNum = Math.floor(Math.random() * 0xffffff).toString(16);

  const randomRValue = Math.floor(Math.random() * 255);
  const randomGValue = Math.floor(Math.random() * 155);
  const randomBValue = Math.floor(Math.random() * 125);

  const red = (new Main().r = randomRValue);
  const green = (new Main().r = randomGValue);
  const blue = (new Main().r = randomBValue);

  console.log(`Red Color: ${red}`);
  console.log(`Green Color: ${green}`);
  console.log(`Blue Color: ${blue}`);

  console.log(`Random Hex Color Code: ${randomNum}`);
}
