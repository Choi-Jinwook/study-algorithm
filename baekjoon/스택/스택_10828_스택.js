const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => el));
}).on("close", () => {
  let stack = [];
  let result = "";
  let n = input.shift();
  for (let i = 0; i < input.length; i++) {
    if (input[i][0] === "push") {
      stack.push(parseInt(input[i][1]));
    } else if (input[i][0] === "top") {
      if (!stack[0]) {
        result += "-1\n";
      } else {
        result += `${stack[stack.length - 1]}\n`;
      }
    } else if (input[i][0] === "size") {
      result += `${stack.length}\n`;
    } else if (input[i][0] === "empty") {
      if (!stack[0]) {
        result += "1\n";
      } else {
        result += "0\n";
      }
    } else if (input[i][0] === "pop") {
      if (!stack[0]) {
        result += "-1\n";
      } else {
        let tmp = stack[stack.length - 1];
        stack = stack.slice(0, stack.length - 1);
        result += `${tmp}\n`;
      }
    }
  }
  console.log(result);
  process.exit();
});
