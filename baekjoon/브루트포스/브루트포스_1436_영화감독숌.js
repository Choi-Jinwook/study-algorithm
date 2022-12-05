const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;

rl.on("line", (line) => {
  n = parseInt(line);
}).on("close", () => {
  let cnt = 0;
  let res = null;
  let i = 666;
  while (cnt !== n) {
    if (String(i).includes("666")) {
      cnt++;
      if (cnt === n) {
        res = i;
      }
    }
    i++;
  }
  console.log(res);
  process.exit();
});
