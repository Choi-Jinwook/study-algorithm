const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let cnt = 0;

rl.on("line", (line) => {
  if (line.includes(" ")) {
    input.push(line.split(" ").map((el) => parseInt(el)));
  } else {
    input.push(parseInt(line));
  }
  if (input.length === 3) {
    rl.close();
  }
});

rl.on("close", () => {
  for (let i = 0; i < input[0]; i++) {
    if (typeof input[1] == "object") {
      if (input[2] === input[1][i]) {
        cnt++;
      }
    } else {
      if (input[2] === input[1]) {
        cnt++;
      }
    }
  }
  console.log(cnt);
  process.exit();
});
