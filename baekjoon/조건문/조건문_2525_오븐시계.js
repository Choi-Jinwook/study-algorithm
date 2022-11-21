const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let a, b, c;

rl.on("line", (line) => {
  if (line.includes(" ")) {
    input = line.split(" ").map((el) => parseInt(el));
  } else {
    input.push(parseInt(line));
  }
  if (input.length == 3) {
    rl.close();
  }
});

rl.on("close", () => {
  a = input[0];
  b = input[1];
  c = input[2];
  if (b + c >= 60) {
    if (a + (b + c) / 60 >= 24) {
      console.log(a + parseInt((b + c) / 60) - 24, (b + c) % 60);
    } else {
      console.log(a + parseInt((b + c) / 60), (b + c) % 60);
    }
  } else {
    console.log(a, b + c);
  }
});
