// 입력 받기
const INPUT = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((value) => +value);

// 알고리즘
let max = Math.max(...INPUT);
let maxIndex = INPUT.indexOf(max) + 1;

// 출력하기
console.log(max);
console.log(maxIndex);
