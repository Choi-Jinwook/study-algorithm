const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let input = [];
let score = [];
let add = 0;
let sum = 0;

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    input.push(line);
  }
}).on("close", () => {
  for (let i = 0; i < n; i++) {
    let res = input[i].split("").map((el) => el);
    for (let j = 0; j < res.length; j++) {
      if (res[j] === "O") {
        add++;
        sum += add;
      } else {
        add = 0;
      }
    }
    score.push(sum);
    add = 0;
    sum = 0;
  }
  for (let i = 0; i < n; i++) {
    console.log(score[i]);
  }
  process.exit();
});
