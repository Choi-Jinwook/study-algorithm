const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  for (let i = 0; i < input.length; i++) {
    let sum = input[i][0] + input[i][1];
    if (sum === 0) {
      process.exit();
    } else {
      console.log(sum);
    }
  }
});
