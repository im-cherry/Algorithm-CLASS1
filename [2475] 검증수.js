// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split(" ");

// 알고리즘
let answer = 0;
for (let i = 0; i < INPUT.length; i++) {
  answer += INPUT[i] * INPUT[i];
}
answer %= 10;

// 출력 하기
console.log(answer);
