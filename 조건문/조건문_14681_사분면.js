const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let x, y;

rl.on("line", (line) => {
  input.push(line);
  if (input.length == 2) {
    rl.close();
  }
});

rl.on("close", () => {
  x = input[0];
  y = input[1];
  if (x > 0 && y > 0) {
    console.log("1");
  } else if (x < 0 && y > 0) {
    console.log("2");
  } else if (x < 0 && y < 0) {
    console.log("3");
  } else if (x > 0 && y < 0) {
    console.log("4");
  }
  process.exit();
});
