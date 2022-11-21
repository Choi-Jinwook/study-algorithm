const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let h, m;

rl.on("line", (line) => {
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
});

rl.on("close", () => {
  h = input[0];
  m = input[1];
  if (m >= 45) {
    console.log(h, m - 45);
  } else if (m < 45) {
    if (h == 0) {
      console.log(23, 60 + m - 45);
    } else {
      console.log(h - 1, 60 + m - 45);
    }
  }
});
