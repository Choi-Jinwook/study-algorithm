const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
  rl.close();
});

rl.on("close", () => {
  if (input[0] <= 100 && input[0] >= 90) {
    console.log("A");
  } else if (input[0] >= 80 && input[0] < 90) {
    console.log("B");
  } else if (input[0] >= 70 && input[0] < 80) {
    console.log("C");
  } else if (input[0] >= 60 && input[0] < 70) {
    console.log("D");
  } else if (input[0] >= 50 && input[0] < 60) {
    console.log("E");
  } else {
    console.log("F");
  }
  process.exit();
});
