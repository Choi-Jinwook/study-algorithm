class Queue {
  constructor() {
    this.arr = [];
    this.start = 0;
    this.end = 0;
  }
  size() {
    if (this.start != 0 && this.end === this.start) return 1;
    return this.end - this.start;
  }
  push(item) {
    this.arr[this.end] = item;
    this.end++;
  }
  pop() {
    if (this.size() <= 0) return null;
    const result = this.arr[this.end - 1];
    let newQueue = [];
    for (let i = 0; i < this.end - 1; i++) {
      newQueue.push(this.arr[i]);
    }
    this.arr = newQueue;
    this.end -= 1;
    return result;
  }
  popleft() {
    if (this.size() <= 0) return null;
    const result = this.arr[this.start];
    let newQueue = [];
    for (let i = 1; i < this.end; i++) {
      newQueue.push(this.arr[i]);
    }
    this.arr = newQueue;
    this.end -= 1;
    this.start += 1;
    return result;
  }
  front() {
    if (this.size() <= 0) return null;
    if (this.start === this.end) return this.arr[0];
    return this.arr[this.start];
  }
  back() {
    if (this.size() <= 0) return null;
    return this.arr[this.size() - 1];
  }
  isEmpty() {
    if (this.size() === 0) return true;
    return false;
  }
}

let queue = new Queue();

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
      queue.push(Number(push[i][1]));
    }
    console.log(queue);
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "pop") {
      let back = queue.back();
      queue.pop();
      console.log(`poped: ${back}`);
      console.log(queue);
    } else if (input[i] === "popleft") {
      let front = queue.front();
      queue.popleft();
      console.log(`poped: ${front}`);
      console.log(queue);
    } else if (input[i] === "front") {
      console.log(`front: ${queue.front()}`);
    } else if (input[i] === "back") {
      console.log(`back: ${queue.back()}`);
    } else if (input[i] === "isEmpty") {
      console.log(`isEmpty: ${queue.isEmpty()}`);
    } else {
      console.log("wrong input");
    }
  }
  process.exit();
});

/*
push(number): queue.push(number)
pop: queue.pop()
popleft: queue.popleft()
front: queue.front()
back: queue.back()
isEmpty: queue.isEmpty()
*/
