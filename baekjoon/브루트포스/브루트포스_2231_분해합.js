let arr = [];

const how = (num) => {
  if (Math.floor(num / 10) === 0) {
    arr.push(num);
    return arr;
  }
  arr.push(num % 10);
  how(Math.floor(num / 10));
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
  for (let i = 0; i < n; i++) {
    let sum = i;
    how(i);
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
    }
    if (sum === n) {
      console.log(i);
      process.exit();
    }
    arr = [];
  }
  console.log(0);
  process.exit();
});
