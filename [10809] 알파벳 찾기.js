// 입력받기
const WORD = require("fs").readFileSync("/dev/stdin").toString();

// 알고리즘
const ANSWER = [];
for (const alpha of "abcdefghijklmnopqrstuvwxyz") {
  ANSWER.push(WORD.indexOf(alpha));
}

// 출력하기
console.log(ANSWER.join(" "));
