let array = Array.from({ length: 10000 }, () => 1);

const self_number = (num) => {
  let a = Math.floor(num / 1000);
  let b = Math.floor(num / 100) - a * 10;
  let c = Math.floor(num / 10) - a * 100 - b * 10;
  let d = num % 10;
  let number = num + a + b + c + d;
  if (number > 10000) {
    return;
  }
  array[number - 1] = 0;
  self_number(number);
};

for (let i = 1; i <= 10000; i++) {
  self_number(i);
}

for (let i = 0; i < 10000; i++) {
  if (array[i] === 1) {
    console.log(i + 1);
  }
}
