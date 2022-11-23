const { EOF } = require("dns");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  if (line.split(" ").map((el) => parseInt(el)) != EOF) {
    input.push(line.split(" ").map((el) => parseInt(el)));
  } else {
    process.exit();
  }
}).on("close", () => {
  for (let i = 0; i < input.length; i++) {
    let sum = 0;
    sum = input[i][0] + input[i][1];
    console.log(sum);
  }
});
