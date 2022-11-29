const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let p = [];
let input = [];

rl.on("line", (line) => {
  if (!p[0]) {
    p = line.split(" ").map((el) => parseInt(el));
  } else {
    input = line.split(" ").map((el) => parseInt(el));
  }
}).on("close", () => {
  input.sort((a, b) => b - a);
  console.log(input[p[1] - 1]);
  process.exit();
});
