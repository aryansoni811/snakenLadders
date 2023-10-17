# Snake🐍&Ladders🪜

## How to run:

```javascript
node snl_play.js
```

## Sequence of the game:

1. Start

2. There are 2 players (Red & blue), enter their names

3. display the board

   - simple 1-d array[100] is used instead of 2-d (10\*10) array.
   - there are two board: one for game engine purpose and one for visual purpose.

4. Place the snake and ladders.

   - Snake takes you down and Ladder takes you up
   - using lookup tables for this, through 2-d array.
   - should not be at same points [rule].
   - was trying to add both the starting point (the point through which it will advance) and ending points (the point at which it will end up) of Snakes/Ladders but could not since ending points were not needed to advance the game and added unnecessary clutter to the board.

5. The Game starts :

   - Red going the first move.
   - in every turn the the dice decides the next move.
   - the player moves the same no. of steps and then its next player's turn.
   - there is a counter to keep track of each of the players positions, which would be returned.

6. The game will go on until one of the players reach 100.

## Error Handling

I have tried a different approach of handling errors here thorugh the use of error codes. Since there were more than two possible outcomes that needed to be handled.

- **601**: `Not your turn. It's nextPlayers's turn.`
- **602**: `Invalid move, try again`
- **610**: `Congratulations Player has WON the Game!!!.` \
  This will finish the Game.
- **611**: `This move is not available.`

- **600**: `NO ERROR.` Advance the game.

I first applied a way to compare the strings and then decide the output, it worked but didn't feel the right way to implement it. I think a normal bool value can be implemented, but it did feel scaleable as features would get added.

## Screenshots

![gameStart](https://github.com/aryansoni811/snakenLadders/blob/main/images/Screenshot%202023-10-17%20172012.png?raw=true)
![gameEnd](https://github.com/aryansoni811/snakenLadders/blob/main/images/Screenshot%202023-10-17%20171952.png?raw=true)

## Future Scope

- Adding a UI
- A socket to play over the internet.
