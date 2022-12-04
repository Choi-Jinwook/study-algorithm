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
  let res = [];
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (i != j) {
        if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
          cnt++;
        }
      }
    }
    res.push(cnt + 1);
  }
  console.log(res.join(" "));
  process.exit();
});
