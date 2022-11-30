const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let input = [];

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    input.push(line);
  }
}).on("close", () => {
  input.sort((a, b) => a.length - b.length || a.localeCompare(b));
  const deleteDuplicate = new Set(input);
  console.log(Array.from(deleteDuplicate).join("\n"));
  process.exit();
});
