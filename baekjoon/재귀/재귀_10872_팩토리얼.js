const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 1;
let i = 1;
let result = 1;
const fibo = (num) => {
  if (num === 0) return 1;
  result *= i;
  i++;
  if (i > n) return result;
  fibo(i);
};

rl.on("line", (line) => {
  n = parseInt(line);
}).on("close", () => {
  fibo(n);
  console.log(result);
  process.exit();
});
