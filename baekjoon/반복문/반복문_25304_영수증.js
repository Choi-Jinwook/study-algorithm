const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [],
  result = [],
  sum = 0;

rl.on("line", (line) => {
  if (!result[1]) {
    result.push(parseInt(line));
  } else {
    input.push(line.split(" ").map((el) => parseInt(el)));
  }

  if (input.length === result[1]) {
    rl.close();
  }
});

rl.on("close", () => {
  for (let i = 0; i < result[1]; i++) {
    sum = sum + input[i][0] * input[i][1];
  }

  if (sum === result[0]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
