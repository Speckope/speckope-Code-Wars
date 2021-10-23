/* Write a function done_or_not/DoneOrNot passing a 
board (list[list_lines]) as parameter. If the board is 
valid return 'Finished!', otherwise return 'Try again!'.
Rules for complition are same as in sudoku. */

// So i need to check whther each row is unique, column and region
function doneOrNot(board) {
  // 1. Check if every row is has 9 unique elements
  board.forEach((row) => {
    if (new Set(row).size !== 9) return 'Try again!';
  });
  // 2. Check if every column has 9 unique elements
  for (let i = 0; i < 9; i++) {
    let col = [];
    // Loop vertically with another loop.
    for (let j = 0; j < 9; j++) {
      col.push(board[j][i]);
    }
    // make new set and check
    if (new Set(col).size !== 9) return 'Try again!';
  }
  // 3. Check if every region is unique
  for (let i = 0; i < 9; i++) {
    console.log(i);
    let reg = [];

    // 2nd loop, we wil be looping over 9 numbers in the region
    for (let j = 0; j < 9; j++) {
      //  Math.floor(i/3) will be either 0,1 or 2. And multiplicated 0,3 or 6
      // Math.floor(j / 3) will be either 1,2,3
      let a = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      // j % 3 will be 0,1 or 2
      //YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS FIXED IT
      let b = (i % 3) * 3 + (j % 3);

      reg.push(board[a][b]);
    }

    // Check if numbers from region are unique
    if (new Set(reg).size !== 9) return 'Try again!';
  }

  // 4. If everything is passed return 'Finished!'
  return 'Finished!';
  // If failed on any step return 'Try again!'
}

// Other Solution
function doneOrNot2(rows) {
  var columns = [],
    blocks = [];

  for (var i = 0; i < 9; i++) {
    columns[i] = [];

    for (var j = 0; j < 9; j++) {
      var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      console.log(k);
      blocks[k] = blocks[k] || [];

      blocks[k].push(rows[i][j]);

      columns[i].push(rows[j][i]);
    }
  }

  var is_valid_row = (row) =>
    row
      .slice(0)
      .sort((a, b) => a - b)
      .join('') == '123456789';

  var is_valid =
    rows.every(is_valid_row) &&
    columns.every(is_valid_row) &&
    blocks.every(is_valid_row);

  return is_valid ? 'Finished!' : 'Try again!';
}

console.log(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
