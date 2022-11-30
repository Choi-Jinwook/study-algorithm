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
    input = line.split(" ").map((el) => parseInt(el));
  }
}).on("close", () => {
  const tmp = [...input];
  const sorted = tmp.sort((a, b) => a - b);
  const set = new Set(sorted);
  const map = new Map();

  [...set].forEach((n, i) => {
    map.set(n, i);
  });

  let result = "";

  input.forEach((n, i) => {
    result += map.get(n) + " ";
  });

  console.log(result);
  process.exit();
});
