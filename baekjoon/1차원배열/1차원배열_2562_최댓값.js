const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let res = "";

rl.on("line", (line) => {
  input.push(parseInt(line));
}).on("close", () => {
  let max = input[0];
  let location = 0;
  for (let i = 0; i < 9; i++) {
    if (max < input[i]) {
      max = input[i];
      location = i;
    }
  }
  location++;
  res += max + "\n" + location;
  console.log(res);
});
