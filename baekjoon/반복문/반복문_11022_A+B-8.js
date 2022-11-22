const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let t = 0;

rl.on("line", (line) => {
  if (line.includes(" ")) {
    input.push(line.split(" ").map((el) => parseInt(el)));
  } else {
    t = parseInt(line);
  }

  if (input.length === t) {
    rl.close();
  }
});

rl.on("close", () => {
  for (let i = 0; i < t; i++) {
    console.log(
      `Case #${i + 1}: ${input[i][0]} + ${input[i][1]} = ${
        input[i][0] + input[i][1]
      }`
    );
  }
  process.exit();
});
