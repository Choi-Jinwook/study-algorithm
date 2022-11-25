const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let sorted = Array.from({ length: 30 }, () => 0);
let res = [];
let log = "";

rl.on("line", (line) => {
  input.push(parseInt(line));
}).on("close", () => {
  for (let i = 0; i < 28; i++) {
    sorted[input[i] - 1] = 1;
  }
  for (let i = 0; i < 30; i++) {
    if (sorted[i] === 0) {
      res.push(i + 1);
    }
  }
  if (res[0] > res[1]) {
    log += res[1] + "\n" + res[0];
    console.log(log);
  } else {
    log += res[0] + "\n" + res[1];
    console.log(log);
  }
  process.exit();
});
