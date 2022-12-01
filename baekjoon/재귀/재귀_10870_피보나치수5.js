const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let result = 0;
let i = 2;
let input = [0, 1];

const fibo = (num) => {
  if (num === 0) return result;
  input.push(parseInt(input[i - 1] + input[i - 2]));
  i++;
  result = input[i - 1];
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
