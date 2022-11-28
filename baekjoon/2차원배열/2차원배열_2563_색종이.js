const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let input = [];

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    input.push(line.split(" ").map((el) => parseInt(el)));
  }
}).on("close", () => {
  let arr = new Array(100).fill().map((el) => new Array(100).fill(false));
  for (let i = 0; i < n; i++) {
    let x = input[i][0];
    let y = input[i][1];
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        arr[x + j][y + k] = true;
      }
    }
  }
  let result = 0;

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (arr[i][j] === true) {
        result++;
      }
    }
  }
  //   let result = arr.reduce((past, curr) => {
  //     for (let el of curr) {
  //       if (el) {
  //         past++;
  //       }
  //     }
  //     return past;
  //   }, 0);
  console.log(result);
});
