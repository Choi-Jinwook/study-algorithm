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
    input = line.split(" ").map((el) => parseInt(el));
  }
}).on("close", () => {
  let min = input[0];
  let max = input[0];
  for (let i = 0; i < n; i++) {
    if (min > input[i]) {
      min = input[i];
    }
    if (max < input[i]) {
      max = input[i];
    }
  }
  console.log(min + " " + max);
  process.exit();
});
