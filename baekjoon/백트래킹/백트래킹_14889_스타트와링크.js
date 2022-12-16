const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n = null;

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line);
  } else {
    input.push(line.split(" ").map((el) => parseInt(el)));
  }
}).on("close", () => {
  const solution = (input) => {
    const halfN = n / 2;
    const check = new Array(n).fill(0);
    let min = Number.MAX_SAFE_INTEGER;
    const dfs = (L, K) => {
      if (L === halfN) {
        const start = [];
        const link = [];
        let startSum = (linkSum = 0);
        for (let i = 0; i < n; i++) {
          if (check[i]) start.push(i);
          else link.push(i);
        }
        for (let i = 0; i < halfN; i++) {
          for (let j = i + 1; j < halfN; j++) {
            startSum =
              startSum + input[start[i]][start[j]] + input[start[j]][start[i]];
            linkSum =
              linkSum + input[link[i]][link[j]] + input[link[j]][link[i]];
          }
        }
        min = Math.min(min, Math.abs(startSum - linkSum));
        return;
      }
      for (let i = K; i < n; i++) {
        check[i] = 1;
        dfs(L + 1, i + 1);
        check[i] = 0;
      }
    };
    dfs(0, 0);
    return min;
  };
  console.log(solution(input));
  process.exit();
});
