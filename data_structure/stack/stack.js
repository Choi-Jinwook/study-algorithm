class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(item) {
    this.arr[this.index] = item;
    this.index++;
  }
  pop() {
    if (this.index <= 0) return null;
    const result = this.arr[this.index - 1];
    let newStack = [];
    for (let i = 0; i < this.index - 1; i++) {
      newStack.push(this.arr[i]);
    }
    this.arr = newStack;
    this.index -= 1;
    return result;
  }
  isEmpty() {
    if (this.index === 0) return true;
    else return false;
  }
  isFull() {
    if (this.index !== 0) return true;
    else return false;
  }
  top() {
    return this.arr[this.index - 1];
  }
}

let stack = new Stack();

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let push = [];

rl.on("line", (line) => {
  if (line.includes(" ")) {
    push.push(line.split(" "));
  } else {
    input.push(line);
  }
}).on("close", () => {
  if (push) {
    for (let i = 0; i < push.length; i++) {
      stack.push(Number(push[i][1]));
    }
    console.log(stack);
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "pop") {
      let top = stack.top();
      stack.pop();
      console.log(`poped: ${top}`);
      console.log(stack);
    } else if (input[i] === "top") {
      console.log(`top: ${stack.top()}`);
    } else if (input[i] === "isEmpty") {
      console.log(`isEmpty: ${stack.isEmpty()}`);
    } else if (input[i] === "isFull") {
      console.log(`isFull: ${stack.isFull()}`);
    } else {
      console.log("wrong input");
    }
  }
  process.exit();
});

/*
push (number): stack.push(number)
pop: stack.pop()
top: stack.top()
isEmpty: stack.isEmpty()
*/
