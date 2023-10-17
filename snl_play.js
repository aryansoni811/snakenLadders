const { snakenladders } = require("./snl");

const play = snakenladders("Ram", "Shyaam");

let result,
  i = 1,
  message;

//lets roll the dice and begin

do {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  console.log(`${i % 2 ? "red" : "blue"} Dice = ${randomNumber}`);
  [result, message] = play(`${i % 2 ? "red" : "blue"}`, randomNumber);
  if (result === 600) {
    console.log(`${i % 2 ? "red" : "blue"} is in position ${message}`);
    i++;
  } else if (result === 611) {
    //special condition
    i++;
    console.log(message);
  } else {
    console.log(message);
    break;
  }
  if (200 < i) break;
} while (!(result === 610));
