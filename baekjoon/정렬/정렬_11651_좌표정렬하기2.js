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
    input.push(line.split(" ").map((el) => parseInt(el)));
  }
}).on("close", () => {
  input.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
    }
  });

  let result = "";
  for (let i = 0; i < n; i++) {
    result += input[i][0] + " " + input[i][1] + "\n";
  }
  console.log(result);
});
