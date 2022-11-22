const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let sum = 0;

rl.on("line", (line) => {
  input.push(parseInt(line));
  rl.close();
});

rl.on("close", () => {
  for (let i = 0; i < input[0]; i++) {
    sum = sum + i + 1;
  }
  console.log(sum);
  process.exit();
});
