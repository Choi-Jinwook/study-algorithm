const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let namuji = Array.from({ length: 42 }, () => 0);

rl.on("line", (line) => {
  input.push(parseInt(line));
}).on("close", () => {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    namuji[input[i] % 42] = 1;
  }
  for (let i = 0; i < 42; i++) {
    if (namuji[i] === 1) {
      sum++;
    }
  }
  console.log(sum);
  process.exit();
});
