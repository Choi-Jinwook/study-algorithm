const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let input = [];

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    input.push(parseInt(line));
  }
}).on("close", () => {
  input.sort((a, b) => a - b);
  let result = "";
  for (let i = 0; i < n; i++) {
    result += input[i];
    result += "\n";
  }
  console.log(result);
  process.exit();
});
