const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  if (!input[0]) {
    input = line.split("").map((el) => parseInt(el));
  }
}).on("close", () => {
  input.sort((a, b) => b - a);
  let result = "";
  for (let i = 0; i < input.length; i++) {
    result += input[i];
  }
  console.log(result);
});
