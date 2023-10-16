const { snakenladders } = require("./snl");

const play = snakenladders("Ram", "Shyaam");

let result,
  i = 0,
  message;

//lets roll the dice and begin

do {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(`Dice = ${randomNumber}`);
  [result, message] = play(`${i % 2 === 0 ? "red" : "blue"}`, randomNumber);
  if (result) {
    console.log(`${i % 2 === 0 ? "red" : "blue"} is in position ${message}`);
    i++;
  } else if (message.localeCompare("This move is not available.")) {
    //special condition
    i++;
    console.log(message);
  } else console.log(message);
  if (200 < i) break;
} while (!(message === "Congratulations You have WON the Game!!!"));
