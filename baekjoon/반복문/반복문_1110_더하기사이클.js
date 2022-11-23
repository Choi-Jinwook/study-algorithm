const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
let newInput = 0;
let tries = 0;

rl.on("line", (line) => {
  input = parseInt(line);
  newInput = input;
  rl.close();
});

rl.on("close", () => {
  while (true) {
    let a = parseInt(input / 10);
    let b = input % 10;

    input = b * 10 + ((a + b) % 10);

    if (newInput === input) {
      tries++;
      break;
    } else {
      tries++;
      continue;
    }
  }
  console.log(tries);
  process.exit();
});
