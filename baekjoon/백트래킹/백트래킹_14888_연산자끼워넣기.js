const solution = (input) => {
  const N = +input[0];
  const numbers = input[1].split(" ").map(Number);
  const operator = input[2].split(" ").map(Number);
  const opObj = {
    0: (oper1, oper2) => oper1 + oper2,
    1: (oper1, oper2) => oper1 - oper2,
    2: (oper1, oper2) => oper1 * oper2,
    3: (oper1, oper2) => {
      if (oper1 < 0) {
        return -Math.floor(-oper1 / oper2);
      }
      return Math.floor(oper1 / oper2);
    },
  };

  const temp = [];
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  const dfs = (L) => {
    if (L === N - 1) {
      let oper1 = numbers[0];
      for (let i = 0; i < temp.length; i++) {
        let oper2 = numbers[i + 1];
        let idx = temp[i];
        oper1 = opObj[idx](oper1, oper2);
      }
      if (oper1 > max) {
        max = oper1;
      }
      if (oper1 < min) {
        min = oper1;
      }
    }
    for (let i = 0; i < 4; i++) {
      if (!operator[i]) continue;
      operator[i] -= 1;
      temp.push(i);
      dfs(L + 1);
      operator[i] += 1;
      temp.pop();
    }
  };
  dfs(0);

  return `${max}\n${min}`;
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  console.log(solution(input));
  process.exit();
});
