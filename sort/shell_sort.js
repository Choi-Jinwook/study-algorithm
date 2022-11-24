const insertion_sort = (arr, first, last, gap) => {
  let j;
  for (let i = first + gap; i <= last; i = i + gap) {
    let key = arr[i];
    for (j = i - gap; j >= first && arr[j] > key; j = j - gap) {
      arr[j + gap] = arr[j];
    }
    arr[j + gap] = key;
  }
};

const shell_sort = (arr, n) => {
  for (let gap = parseInt(n / 2); gap > 0; gap = parseInt(gap / 2)) {
    if (gap % 2 == 0) {
      gap++;
    }

    for (let i = 0; i < gap; i++) {
      insertion_sort(arr, i, n - 1, gap);
    }
  }
};

let arr = [10, 8, 6, 20, 4, 3, 22, 1, 0, 15, 16];
let n = arr.length;

shell_sort(arr, n);

console.log(arr);
