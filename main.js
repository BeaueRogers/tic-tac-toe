

// initialize array
var A = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
var gl_How_Many_Plays = 0;

//console.log(A[0]);
//console.log(A[1]);
//console.log(A[2]);


function rowWin() {

  for (var x = 0; x < 3; x++) {

    // Check each row for a win
    if (A[x][0] === A[x][1] === A[x][2]) {

      // Return true to indicate a player has won the game.
      return true;
    }
  }

  // If no win then return false
  return false;
}

function colWin() {

  for (var x = 0; x < 3; x++) {

    // Check each column for a win
    if (A[0][x] === A[1][x] === A[2][x]) {

      // Return true to indicate a player has won the game
      return true;
    }
  }

  // If no win then return false
  return false;
}


function diagWin() {

  // Check each diagonal for a win
  if ((A[0][0] === A[1][1] === A[2][2]) ||
       A[0][2] === A[1][1] === A[2][0]) {

    // Return true to indicate a player has won the game
    return true;
  }

  // If no win then return false
  return false;
}

function checkForWin() {

  // Check to see if there is a row, column, or diagonal win
  if (rowWin() || colWin() || diagWin()) {

    // Return true to indicate a player has won the game
    return true;
  }

  // If no win then return false
  return false;
}

function checkBoard() {

  // Increment the number of plays thus far
  gl_How_Many_Plays++;

  // Did a player win?
  if (checkForWin()) {

    // A player has won the game

    // ---> code here to show a player has won
  }
  else if (gl_How_Many_Plays === 9) {

    // Since no player has won the game, are all of the boxes filled?

    // --> code here to show the game is a draw
  }
  else {

    // Keep playing
  }

}

