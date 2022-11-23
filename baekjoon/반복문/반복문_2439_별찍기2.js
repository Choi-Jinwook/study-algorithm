const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(parseInt(line));
  rl.close();
});

rl.on("close", () => {
  for (let i = 0; i < input; i++) {
    let star = "";
    for (let j = input - i - 1; j > 0; j--) {
      star += " ";
    }
    for (let j = 0; j < i + 1; j++) {
      star += "*";
    }
    console.log(star);
  }
  process.exit();
});
