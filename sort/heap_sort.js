const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (line) => {
  arr = line.split(" ").map((el) => parseInt(el));
  rl.close();
});

const heap_sort = (arr) => {
  if (arr.length <= 1) return;
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    max_heap_sort(arr, i, arr.length);
  }
};

const max_heap_sort = (arr, i, length) => {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let parent = i;

  if (left < length && arr[left] > arr[parent]) {
    parent = left;
  }

  if (right < length && arr[right] > arr[parent]) {
    parent = right;
  }

  if (i != parent) {
    let tmp = arr[i];
    arr[i] = arr[length];
    arr[length] = tmp;
    console.log(arr);
    max_heap_sort(arr, parent, length);
  }
};

rl.on("close", () => {
  heap_sort(arr);
  console.log(arr);
  process.exit();
});
