const getCount = (x, y, arr, board) => {
  let cnt = 0;
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (arr[i][j] !== board[i - y][j - x]) {
        cnt++;
      }
    }
  }
  return cnt;
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let cntArr = [];
  const [str, ...strArr] = input;
  const [n, m] = str.split(" ").map(Number);

  const whiteStart = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];

  const blackStart = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  for (let i = 0; i < n - 7; i++) {
    for (let j = 0; j < m - 7; j++) {
      cntArr.push(getCount(j, i, strArr, whiteStart));
      cntArr.push(getCount(j, i, strArr, blackStart));
    }
  }

  const min = Math.min(...cntArr);
  console.log(min);
  process.exit();
});
