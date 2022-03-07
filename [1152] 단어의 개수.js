// 입력 받기
const LINE = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

// 알고리즘
const ANSWER = LINE[0] == "" ? 0 : LINE.length;

// 출력하기
console.log(ANSWER);
