const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(parseInt(line));
}).on("close", () => {
  input.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  console.log(Math.floor(sum / input.length));
  console.log(input[Math.floor(input.length / 2)]);
  process.exit();
});
