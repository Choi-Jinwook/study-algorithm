const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const merge = (arr, left, mid, right) => {
  let i = left;
  let j = mid + 1;
  let k = left;
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      sorted[k++] = arr[i++];
    } else {
      sorted[k++] = arr[j++];
    }
  }

  if (i > mid) {
    for (let l = j; l <= right; l++) {
      sorted[k++] = arr[l];
    }
  } else {
    for (let l = i; l <= mid; l++) {
      sorted[k++] = arr[l];
    }
  }

  for (let l = left; l <= right; l++) {
    arr[l] = sorted[l];
  }
};

const merge_sort = (arr, left, right) => {
  let mid = 0;
  if (left < right) {
    mid = parseInt((left + right) / 2);
    merge_sort(arr, left, mid);
    merge_sort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
};

let arr = [];
let n;

rl.on("line", (line) => {
  arr = line.split(" ").map((el) => parseInt(el));
  n = arr.length;
  rl.close();
});

let sorted = Array.from({ length: n }, () => 0);

rl.on("close", () => {
  merge_sort(arr, 0, n - 1);
  console.log(arr);
  process.exit();
});
