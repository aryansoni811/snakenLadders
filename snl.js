const buildBoard = () => {
  let board = [];
  for (let i = 0; i <= 100; i++) board.push(i);

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

  //sorting by their second index to PS. for these two lines gpt helped, not good in js sorting
  snakes.sort((a, b) => a[1] - b[1]);
  ladder.sort((a, b) => a[1] - b[1]);

  for (let i = 1, s = 0, l = 0; i <= 100; i++) {
    if (s < snakes.length && snakes[s][1] === i) {
      board[i] = `s${s}`;
      s++;
    }

    if (l < ladder.length && ladder[l][1] === i) {
      board[i] = `L${l}`;
      l++;
    }
  }

  return board;
};

const snakenladders = (Name1, Name2) => {
  console.log(`${Name1} is Red`);
  console.log(`${Name2} is Blue.`);

  let red = "R";
  let blue = "B";

  let board = buildBoard();

  //starting position of pieces
  board[0] = `${red + blue}`;

  console.log(board);
};

snakenladders("Rohan", "Rohit");
