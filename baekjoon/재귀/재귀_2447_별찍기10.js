const stars = (i, j, n) => {
  if (i % 3 === 1 && j % 3 === 1) {
    line.push(" ");
  } else {
    if (n === 1) {
      line.push("*");
    } else {
      stars(parseInt(i / 3), parseInt(j / 3), parseInt(n / 3));
    }
  }
};

const log = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      stars(i, j, n);
    }
    line.push("\n");
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;
let line = [];

rl.on("line", (line) => {
  n = parseInt(line);
}).on("close", () => {
  log(n);
  console.log(line.join(""));
  process.exit();
});
