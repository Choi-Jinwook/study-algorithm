const selection_sort = (arr, n) => {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i != min) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let n = 0;

rl.on("line", (line) => {
  arr = line.split(" ").map((el) => parseInt(el));
  n = arr.length;
  rl.close();
});

rl.on("close", () => {
  selection_sort(arr, n);
  console.log(arr);
  process.exit();
});
