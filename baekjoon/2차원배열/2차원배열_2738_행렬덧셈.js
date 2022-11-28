const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdou,
});

let nm = [];
let input = [];

rl.on("line", (line) => {
  if (!nm[0]) {
    nm = line.split(" ").map((el) => parseInt(el));
  } else {
    input.push(line.split(" ").map((el) => parseInt(el)));
  }
}).on("close", () => {
  let result = "";
  for (let i = 0; i < nm[0]; i++) {
    for (let j = 0; j < nm[1]; j++) {
      result += input[i][j] + input[i + nm[0]][j];
      result += " ";
    }
    result += "\n";
  }
  console.log(result);
  process.exit();
});
