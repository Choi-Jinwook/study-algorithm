const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let cnt = 0;

rl.on("line", (line) => {
  n = parseInt(line);
  rl.close();
});

const hansu = (n) => {
  for (let i = 1; i <= n; i++) {
    let a = Math.floor(i / 1000);
    let b = Math.floor(i / 100) - a * 10;
    let c = Math.floor(i / 10) - a * 100 - b * 10;
    let d = Math.floor(i % 10);
    if (a === 1) {
      cnt--;
    }
    if (b - c === c - d) {
      cnt++;
    } else if (b === 0) {
      cnt++;
    }
  }
  console.log(cnt);
};

rl.on("close", () => {
  hansu(n);
  process.exit();
});
