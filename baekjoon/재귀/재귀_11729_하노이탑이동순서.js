let res = [];
let cnt = 0;
const hanoi = (n, start, other, end) => {
  if (n === 0) return;
  else {
    hanoi(n - 1, start, end, other);
    res.push([start, end]);
    cnt++;
    hanoi(n - 1, other, start, end);
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;

rl.on("line", (line) => {
  n = parseInt(line);
}).on("close", () => {
  hanoi(n, "1", "2", "3");
  console.log(cnt);
  console.log(res.map((el) => el.join(" ")).join("\n"));
  process.exit();
});
