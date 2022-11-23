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
  let star = "";
  for (let i = 0; i < input[0]; i++) {
    star += "*";
    console.log(star);
  }
});
