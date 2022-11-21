const bubble_sort = (array, n) => {
  let i, j, temp;

  for (i = n - 1; i > 0; i--) {
    for (j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

let arr = [];
let n;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr = line.split(" ").map((el) => parseInt(el));
  n = arr.length;
  rl.close();
});

rl.on("close", () => {
  bubble_sort(arr, n);
  console.log(arr);
  process.exit();
});
