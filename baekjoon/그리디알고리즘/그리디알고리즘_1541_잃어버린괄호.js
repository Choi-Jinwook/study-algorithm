const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split("-").map((el) => el);
}).on("close", () => {
  let sum = [];
  for (let i = 0; i < input.length; i++) {
    sum.push(input[i].split("+").map((el) => parseInt(el)));
  }

  for (let i = 0; i < sum.length; i++) {
    if (sum[i][1]) {
      for (let j = 1; j < sum[i].length; j++) {
        sum[i][0] += sum[i][j];
      }
    }
  }

  let result = sum[0][0];

  for (let i = 1; i < sum.length; i++) {
    result -= sum[i][0];
  }
  console.log(result);
  process.exit();
});
