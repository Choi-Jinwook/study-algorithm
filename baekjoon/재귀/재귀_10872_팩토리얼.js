const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 1;
let i = 1;
let result = 1;
const facto = (num) => {
  if (num === 0) return 1;
  result *= i;
  i++;
  if (i > n) return result;
  facto(i);
};

rl.on("line", (line) => {
  n = parseInt(line);
}).on("close", () => {
  facto(n);
  console.log(result);
  process.exit();
});
