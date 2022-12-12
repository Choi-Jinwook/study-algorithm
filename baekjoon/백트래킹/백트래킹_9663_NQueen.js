const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = null;

rl.on("line", (line) => {
  input = parseInt(line);
}).on("close", () => {
  let chess = Array.from({ length: input });
  let cnt = 0;

  const check = (n) => {
    for (let i = 0; i < n; i++) {
      if (chess[n] === chess[i] || n - i === Math.abs(chess[n] - chess[i])) {
        return 0;
      }
    }
    return 1;
  };

  const dfs = (n) => {
    if (n === input) {
      cnt++;
      return;
    }

    for (let i = 0; i < input; i++) {
      chess[n] = i;
      if (check(n)) {
        dfs(n + 1);
      }
    }
  };
  dfs(0);
  console.log(cnt);
  process.exit();
});
