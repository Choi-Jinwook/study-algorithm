const readline = require("readline");
let a, b;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
});

rl.on("close", () => {
  a = input[0];
  b = input[1];
  if (a > b) {
    console.log(">");
  } else if (a == b) {
    console.log("==");
  } else if (a < b) {
    console.log("<");
  }
  process.exit();
});
