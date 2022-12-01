const binary_search = (sorted, map, n) => {
  let center = Math.floor(sorted.length / 2);
  if (sorted[center] === n) {
    console.log(`${n}은(는) ${map.get(n) + 1}번째에 있네요`);
    return;
  } else if (sorted[center] > n) {
    sorted = sorted.slice(0, center);
    binary_search(sorted, map, n);
  } else if (sorted[center] < n) {
    sorted = sorted.slice(center + 1, sorted.length);
    binary_search(sorted, map, n);
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let n = null;

rl.on("line", (line) => {
  if (line.includes(" ")) {
    arr = line.split(" ").map((el) => parseInt(el));
  } else {
    n = parseInt(line);
  }
}).on("close", () => {
  let sorted = [...arr];
  let map = new Map();
  [...arr].forEach((n, i) => {
    map.set(n, i);
  }); // 처음 순서 기억
  sorted.sort((a, b) => a - b);
  binary_search(sorted, map, n);
  process.exit();
});
