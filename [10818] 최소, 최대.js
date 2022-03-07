// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const arr = INPUT[1].split(" ");

// 알고리즘 시작
const min = Math.min(...arr);
const max = Math.max(...arr);

// 출력하기
console.log(min, max);
