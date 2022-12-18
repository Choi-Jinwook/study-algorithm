const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let nk = [];
let sum = 0;

rl.on("line", (line) => {
  if (line.includes(" ")) {
    nk = line.split(" ").map((el) => parseInt(el));
  } else {
    input.push(parseInt(line));
  }
}).on("close", () => {
  const n = nk.shift();
  let k = nk.shift();
  input.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    if (input[i] > k) {
      continue;
    } else {
      sum += Math.floor(k / input[i]);
      k -= Math.floor(k / input[i]) * input[i];
      if (k === 0) {
        break;
      }
    }
  }
  console.log(sum);
  process.exit();
});
