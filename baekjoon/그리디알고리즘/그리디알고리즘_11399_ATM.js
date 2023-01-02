const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;
let input = [];

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line);
  } else {
    input = line.split(" ").map((el) => parseInt(el));
  }
}).on("close", () => {
  input.sort((a, b) => a - b);
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += input[n - i] * i;
  }
  console.log(sum);
  process.exit();
});
