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
  let res = [];
  let mid = "";
  const re = (index, cnt) => {
    if (cnt === m) {
      mid += `${res.join(" ")} \n`;
      return;
    }
    for (let i = index; i < n; i++) {
      res.push(i + 1);
      re(i, res.length);
      res.pop();
    }
  };
  re(0, 0);
  console.log(mid);
  process.exit();
});
