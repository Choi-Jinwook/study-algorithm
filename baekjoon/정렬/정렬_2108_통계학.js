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
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  input.sort((a, b) => a - b);
  let arr = Array.from({ length: input[n - 1] + 1 }, () => 0);
  a = Math.round(input.reduce((past, curr) => (past += curr), 0) / n);
  b = input[Math.floor(n / 2)];
  let max = 0;
  let most = [];
  let num = new Array(8001);
  num.fill(0, 0, 8001);
  for (let i = 0; i < n; i++) {
    if (input[i] < 0) {
      num[-input[i] + 4000]++;
    } else {
      num[input[i]]++;
    }
  }
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  for (let i = 8000; i >= 4001; i--) {
    if (num[i] !== 0 && num[i] >= max) {
      most.push(4000 - i);
    }
  }
  for (let i = 0; i <= 4000; i++) {
    if (num[i] !== 0 && num[i] >= max) {
      most.push(i);
    }
  }

  if (most.length === 1) {
    c = most[0];
  } else if (most.length >= 2) {
    c = most[1];
  }
  d = input[n - 1] - input[0];
  console.log(a + "\n" + b + "\n" + c + "\n" + d);
  process.exit();
});
