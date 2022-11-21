const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let input = [];

rl.on("line", (line) => {
  if (!line.includes(" ")) {
    t = parseInt(line);
  } else {
    input.push(line.split(" ").map((el) => parseInt(el)));
  }
  if (input.length == t) {
    rl.close();
  }
});

rl.on("close", () => {
  for (let i = 0; i < t; i++) {
    console.log(input[i][0] + input[i][1]);
  }
  process.exit();
});
