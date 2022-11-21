const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let a, b, c;

rl.on("line", (line) => {
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
});

rl.on("close", () => {
  a = input[0];
  b = input[1];
  c = input[2];
  if (a == b && b == c) {
    console.log(10000 + a * 1000);
  } else if (a == b && b != c) {
    console.log(1000 + a * 100);
  } else if (b == c && a != b) {
    console.log(1000 + b * 100);
  } else if (a == c && c != b) {
    console.log(1000 + a * 100);
  } else if (a != b && b != c && c != a) {
    let max = input[0];
    for (let i = 0; i < input.length; i++) {
      if (input[i] > max) {
        max = input[i];
      }
    }
    console.log(max * 100);
  }
});
