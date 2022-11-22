const insertion_sort = (arr, n) => {
  let j;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [],
  n;

rl.on("line", (line) => {
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
});

rl.on("close", () => {
  n = input.length;
  insertion_sort(input, n);
  console.log(input);
});
