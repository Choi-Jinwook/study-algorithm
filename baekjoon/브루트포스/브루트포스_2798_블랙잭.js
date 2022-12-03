const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nm = [];
let cards = [];

rl.on("line", (line) => {
  if (!nm[0]) {
    nm = line.split(" ").map((el) => parseInt(el));
  } else {
    cards = line.split(" ").map((el) => parseInt(el));
  }
}).on("close", () => {
  let arr = [];
  let n = nm[0];
  let m = nm[1];
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        arr.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }
  arr.sort((a, b) => a - b);

  if (arr[arr.length - 1] < m) {
    console.log(arr[arr.length - 1]);
    process.exit();
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > m) {
      if (i === 0) {
        console.log(arr[i]);
        process.exit();
      }
      console.log(arr[i - 1]);
      process.exit();
    } else if (arr[i] === m) {
      console.log(arr[i]);
      process.exit();
    }
  }
});
