const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", () => {
  let n = input[0];
  let m = input[1];
  let res = "";
  let output = [];
  const re = (cnt) => {
    if (cnt === m) {
      res += `${output.join(" ")}\n`;
      return;
    }
    for (let i = 0; i < n; i++) {
      output.push(i + 1);
      re(output.length);
      output.pop();
    }
  };
  re(0);
  console.log(res.trim());
  process.exit();
});
