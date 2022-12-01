const linear_search = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      console.log(`${n}은 ${i + 1}번째에 있네요`);
      return;
    }
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n = null;

rl.on("line", (line) => {
  if (line.includes(" ")) {
    input = line.split(" ").map((el) => parseInt(el));
  } else {
    n = parseInt(line);
  }
}).on("close", () => {
  linear_search(input, n);
  process.exit();
});
