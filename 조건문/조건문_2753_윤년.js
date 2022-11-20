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
  if (input[0] % 400 == 0) {
    console.log(1);
  } else if (input[0] % 4 == 0) {
    if (input[0] % 100 == 0) {
      console.log(0);
    } else {
      console.log(1);
    }
  } else {
    console.log(0);
  }
  process.exit();
});
