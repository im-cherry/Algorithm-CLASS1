// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const year = +INPUT[0];

// 알고리즘
let answer = 0;
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
  answer = 1;
}

// 출력 하기
console.log(answer);
