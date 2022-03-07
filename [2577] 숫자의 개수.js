// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 알고리즘
const mul = String(INPUT[0] * INPUT[1] * INPUT[2]); // 곱셈 결과값

const answer = new Array(10).fill(0); // 0부터 9까지의 숫자가 몇번 쓰였는지 저장할 배열
for (const number of mul) {
  answer[number]++;
}

// 출력 하기
for (const number of answer) {
  console.log(number);
}
