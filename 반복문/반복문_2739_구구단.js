const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
  rl.close();
});

rl.on("close", () => {
  for (let i = 0; i < 9; i++) {
    console.log(`${input[0]} * ${i + 1} = ${input[0] * (i + 1)}`);
  }
  process.exit();
});
