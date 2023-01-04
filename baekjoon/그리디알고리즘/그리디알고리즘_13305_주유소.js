const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  const n = input.shift();
  const distances = input.shift();
  const oilFees = input.shift();
  let nowFee = oilFees[0];
  let sum = 0;
  let distance = 0;
  for (let i = 0; i < oilFees.length; i++) {
    if (nowFee > oilFees[i]) {
      sum += nowFee * distance;
      nowFee = oilFees[i];
      distance = 0;
    }
    if (i === oilFees.length - 1) {
      sum += nowFee * distance;
      break;
    }
    distance += distances[i];
  }
  console.log(sum);
  process.exit();
});
