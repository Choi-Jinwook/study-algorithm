let result = [];
let list = [];
let check = new Array(9).fill(false);
const re = (cnt, n, m) => {
  if (cnt === m) {
    result.push(list.join(" "));
    return 1;
  }

  for (let i = 1; i <= n; i++) {
    if (!check[i]) {
      check[i] = true;
      list[cnt] = i;
      re(cnt + 1, n, m);
      check[i] = false;
    }
  }
  return 1;
};

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
  re(0, n, m);
  console.log(result.join("\n"));

  process.exit();
});
