let input = [];
const solution = (input) => {
  const findZeroBoard = () => {
    const zeros = [];
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[0].length; j++) {
        if (input[i][j] === 0) {
          zeros.push([i, j]);
        }
      }
    }
    return zeros;
  };

  const zero = findZeroBoard();
  const n = zero.length;
  let ans = [];

  const isPossible = (x, y, value) => {
    for (let i = 0; i < input.length; i++) {
      if (input[x][i] === value) {
        return false;
      }
    }
    for (let i = 0; i < input.length; i++) {
      if (input[i][y] === value) {
        return false;
      }
    }

    let threeX = Math.floor(x / 3) * 3;
    let threeY = Math.floor(y / 3) * 3;
    for (let i = threeX; i < threeX + 3; i++) {
      for (let j = threeY; j < threeY + 3; j++) {
        if (input[i][j] === value) {
          return false;
        }
      }
    }
    return true;
  };

  const sudoku = (cnt) => {
    if (cnt === n) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          ans.push(input[i][j]);
        }
        console.log(ans.join(" "));
        ans = [];
      }
      process.exit();
    }

    let zeroX = zero[cnt][0];
    let zeroY = zero[cnt][1];

    for (let i = 1; i <= input.length; i++) {
      if (isPossible(zeroX, zeroY, i)) {
        input[zeroX][zeroY] = i;
        sudoku(cnt + 1);
        input[zeroX][zeroY] = 0;
      }
    }
  };
  sudoku(0);

  return input;
};
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  console.log(solution(input));
  process.exit();
});
