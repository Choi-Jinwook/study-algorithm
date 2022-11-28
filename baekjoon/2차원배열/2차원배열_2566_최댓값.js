const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  let max = -1;
  let n = 0;
  let m = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] > max) {
        max = input[i][j];
        n = i + 1;
        m = j + 1;
      }
    }
  }
  console.log(max);
  console.log(n, m);
  process.exit();
});
