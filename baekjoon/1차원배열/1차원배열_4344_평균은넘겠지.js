const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let input = [];
let res = "";

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    input.push(line.split(" ").map((el) => parseInt(el)));
  }
}).on("close", () => {
  for (let i = 0; i < n; i++) {
    let avg = 0;
    let cnt = 0;
    for (let j = 1; j <= input[i][0]; j++) {
      avg += input[i][j];
    }

    avg /= input[i][0];

    for (let j = 1; j <= input[i][0]; j++) {
      if (input[i][j] > avg) {
        cnt++;
      }
    }

    res += ((cnt / input[i][0]) * 100).toFixed(3);
    res += "% \n";
  }
  console.log(res);
});
