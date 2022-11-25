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
  let max = input[0];
  for (let i = 0; i < n; i++) {
    if (max < input[i]) {
      max = input[i];
    }
  }
  for (let i = 0; i < n; i++) {
    input[i] = (input[i] / max) * 100;
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += input[i];
  }
  console.log(sum / n);
  process.exit();
});
