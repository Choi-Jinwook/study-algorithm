const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let cnt = 0;
let input = [];

const recursion = (s, l, r) => {
  if (l >= r) {
    cnt++;
    return 1;
  } else if (s[l] !== s[r]) {
    cnt++;
    return [0, cnt];
  } else {
    cnt++;
    return recursion(s, l + 1, r - 1);
  }
};

const isPalindrome = (s) => {
  cnt = 0;
  return [recursion(s, 0, s.length - 1), cnt];
};

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    input.push(line);
  }
}).on("close", () => {
  let result = "";
  for (let i = 0; i < n; i++) {
    if (typeof isPalindrome(input[i])[0] === "object") {
      result += `${isPalindrome(input[i])[0][0]} ${
        isPalindrome(input[i])[0][1]
      }\n`;
    } else {
      result += `${isPalindrome(input[i])[0]} ${isPalindrome(input[i])[1]}\n`;
    }
  }
  console.log(result);
});
