const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => el));
}).on("close", () => {
  let n = parseInt(input.shift());
  input.sort((a, b) => {
    if (parseInt(a[0]) > parseInt(b[0])) return 1;
    if (parseInt(a[0]) < parseInt(b[0])) return -1;
    if (parseInt(a[0]) === parseInt(b[0])) return 0;
  });

  let result = "";
  for (let i = 0; i < n; i++) {
    result += `${input[i][0]} ${input[i][1]}\n`;
  }
  console.log(result);
  process.exit();
});
