const devide = (arr, left, right) => {
  let pivot = arr[left];
  let tmp = 0;
  let low = left;
  let high = right + 1;

  do {
    do {
      low++;
    } while (low <= right && arr[low] < pivot);

    do {
      high--;
    } while (high >= left && arr[high] > pivot);

    if (low < high) {
      tmp = arr[low];
      arr[low] = arr[high];
      arr[high] = tmp;
    }
  } while (low < high);

  tmp = arr[left];
  arr[left] = arr[high];
  arr[high] = tmp;

  return high;
};

const quick_sort = (arr, left, right) => {
  if (left < right) {
    let q = devide(arr, left, right);
    quick_sort(arr, left, q - 1);
    quick_sort(arr, q + 1, right);
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let n = 0;
let startTime = "";
let endTime = "";

rl.on("line", (line) => {
  arr = line.split(" ").map((el) => parseInt(el));
  n = arr.length;
  startTime = new Date().getTime();
  rl.close();
});

rl.on("close", () => {
  quick_sort(arr, 0, n - 1);
  endTime = new Date().getTime();
  console.log(startTime, endTime);
  console.log(arr, endTime - startTime);
  process.exit();
});
