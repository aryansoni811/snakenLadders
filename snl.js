const buildBoard = (snakes, ladder) => {
  let board = [];
  for (let i = 0; i <= 100; i++) board.push(i);

  for (let i = 1, s = 0, l = 0; i <= 100; i++) {
    if (s < snakes.length && snakes[s][0] === i) {
      board[i] = `S${s}`;
      s++;
    }

    if (l < ladder.length && ladder[l][0] === i) {
      board[i] = `l${l}`;
      l++;
    }
  }

  return board;
};

const snakenladders = (Name1, Name2) => {
  // was thinking of using objects but accessing each key was kinda cumbersome
  //   snakes = {
  //     A: [28, 10],
  //     B: [37, 3],
  //     C: [48, 16],
  //     D: [75, 32],
  //     E: [94, 71],
  //     F: [96, 42],
  //   };
  //this is sorted acc. to their first index
  let snakes = [
    //normal objects would have worked the same I guess
    [28, 10],
    [37, 3],
    [48, 16],
    [75, 32],
    [94, 71],
    [96, 42],
  ];
  const ladder = [
    [4, 56],
    [12, 50],
    [14, 65],
    [22, 58],
    [41, 79],
    [54, 88],
  ];
  //sorting by their second index to PS. for these two lines gpt helped, not good in js sorting
  //not needed i guess.
  //   snakes.sort((a, b) => a[1] - b[1]);
  //   ladder.sort((a, b) => a[1] - b[1]);

  //   for (let i = 1, s = 0, l = 0; i <= 100; i++) {
  //     if (s < snakes.length && snakes[s][1] === i) {
  //       board[i] = `s${s}`;
  //       s++;
  //     }

  //     if (l < ladder.length && ladder[l][1] === i) {
  //       board[i] = `L${l}`;
  //       l++;
  //     }
  //   }

  console.log(`${Name1} is Red`);
  console.log(`${Name2} is Blue.`);
  console.log("Red moves first");

  let currentPlayer = "red";

  const playerPosition = {
    red: "❤️",
    blue: "💙",
  };
  const nextPlayer = {
    red: "blue",
    blue: "red",
  };
  const checkValidMove = (move) => {
    if (1 <= move && move <= 6) return true;
    else return false;
  };
  //building the board
  let board = buildBoard(snakes, ladder);
  // setting initial positions
  board[0] = `${playerPosition["red"] + playerPosition["blue"]}`;
  currentPosition = {
    red: 0,
    blue: 0,
  };
  //advance the game function
  const advanceGame = (currentPlayer, move) => {
    //move the piece
    currentPosition[currentPlayer] = currentPosition[currentPlayer] + move;

    let b = board[currentPosition[currentPlayer]];
    // check for snakes and laader
    if (isNaN(b)) {
      let p = Number(b[1]);
      if (b[0] === "S") {
        currentPosition[currentPlayer] = snakes[p][1];
        console.log(
          `${currentPlayer} was cut by a snake. From${snakes[p][0]} to ${snakes[p][1]}`
        );
      } else if (b[0] === "l") {
        currentPosition[currentPlayer] = ladder[p][1];
        console.log(
          `${currentPlayer} got a ladder. From${ladder[p][0]} to ${ladder[p][1]}`
        );
      }
    }

    return currentPosition[currentPlayer];
  };

  return (player, move) => {
    let position, temp;
    //validation for player
    if (player !== currentPlayer) {
      return [false, `Not your turn. It's ${currentPlayer}'s turn.`];
    }
    //validation for move
    if (!checkValidMove(move)) {
      return [false, "Invalid move, try again"];
    }
    // **validate if the move is available or not ie. final move should be before 100**
    temp = currentPosition[currentPlayer] + move;
    if (temp === 100) {
      return [false, "Congratulations You have WON the Game!!!"];
    } else if (100 < temp) {
      return [false, `This move is not available for ${currentPlayer}.`];
    } else {
      position = advanceGame(currentPlayer, move);
      currentPlayer = nextPlayer[currentPlayer];
      return [true, position];
    }

    //advance the game
    //1. move the pieces and check if they land on any snake or ladder
    // if they do move the pieces accordingly
    //2.Next turn
  };
};

module.exports = { snakenladders };
