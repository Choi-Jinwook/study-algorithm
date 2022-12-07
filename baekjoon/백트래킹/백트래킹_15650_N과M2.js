const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let res = "";
let output = [];
let visited = new Array(9);

rl.on("line", (line) => {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", () => {
  let n = input[0];
  let m = input[1];

  re(0, 0, n, m);
  console.log(res);
});

const re = (index, cnt, n, m) => {
  if (cnt === m) {
    res += `${output.join(" ")}\n`;
    return;
  }

  for (let i = index; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    output.push(i + 1);
    re(i, cnt + 1, n, m);
    output.pop();
    visited[i] = false;
  }
};
