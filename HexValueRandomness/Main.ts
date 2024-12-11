import * as readline from "readline-sync";

const numOfItems = parseInt(readline.question("Enter Number of Items: "));

for (let i = 0; i < numOfItems; i++) {
  const randomNum = Math.floor(Math.random() * 0xffffff).toString(16);

  console.log(randomNum);
}
