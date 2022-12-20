const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;
let input = [];

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line);
  } else {
    input.push(line.split(" ").map((el) => parseInt(el)));
  }
}).on("close", () => {
  input.sort((a, b) => {
    if (a[1] - b[1] === 0) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let cnt = 1;
  let tmp = input[0][1];
  for (let i = 1; i < n; i++) {
    if (tmp <= input[i][0]) {
      tmp = input[i][1];
      cnt++;
    }
  }
  console.log(cnt);
  process.exit();
});
