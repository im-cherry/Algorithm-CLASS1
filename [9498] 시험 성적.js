// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const score = +INPUT[0];

// 알고리즘
let answer;
if (score >= 90) {
  answer = "A";
} else if (score >= 80) {
  answer = "B";
} else if (score >= 70) {
  answer = "C";
} else if (score >= 60) {
  answer = "D";
} else {
  answer = "F";
}

// 출력 하기
console.log(answer);
