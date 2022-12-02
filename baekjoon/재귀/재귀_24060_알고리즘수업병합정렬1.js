let input = [];
let arr = [];
let cnt = 0;
let res = null;
const merge_sort = (arr, p, r) => {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    merge_sort(arr, p, q);
    merge_sort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
};

const merge = (arr, p, q, r) => {
  let i = p;
  let j = q + 1;
  let t = 0;
  let tmp = [];
  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      tmp[t] = arr[i];
      t++;
      i++;
    } else {
      tmp[t] = arr[j];
      t++;
      j++;
    }
    cnt++;
    if (cnt === input[1]) {
      res = tmp[t - 1];
    }
  }
  while (i <= q) {
    tmp[t] = arr[i];
    t++;
    i++;
    cnt++;
    if (cnt === input[1]) {
      res = tmp[t - 1];
    }
  }
  while (j <= r) {
    tmp[t] = arr[j];
    t++;
    j++;
    cnt++;
    if (cnt === input[1]) {
      res = tmp[t - 1];
    }
  }
  i = p;
  t = 0;
  while (i <= r) {
    arr[i] = tmp[t];
    i++;
    t++;
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  if (!input[0]) {
    input = line.split(" ").map((el) => parseInt(el));
  } else {
    arr = line.split(" ").map((el) => parseInt(el));
  }
}).on("close", () => {
  let p = 0;
  let r = input[0] - 1;
  merge_sort(arr, p, r);
  if (!res) {
    res = -1;
  }
  console.log(res);
  process.exit();
});
