const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let result = "";

rl.on("line", (line) => {
  if (line.includes(" ")) {
    input.push(line.split(" ").map((el) => parseInt(el)));
  }
  if (input.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  for (let i = 0; i < input[0][0]; i++) {
    if (input[1][i] < input[0][1]) {
      result += input[1][i];
      result += " ";
    }
  }
  console.log(result);
  process.exit();
});
