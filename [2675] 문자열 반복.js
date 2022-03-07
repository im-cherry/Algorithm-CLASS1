// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 알고리즘
let line;
let R, S; // 반복 횟수, 문자열
let result = "";
const T = +INPUT[0]; // 테스트 케이스 수
for (let t = 1; t <= T; t++) {
  line = INPUT[t].split(" ");
  R = line[0];
  S = line[1];

  for (const s of S) {
    result += s.repeat(R);
  }
  result += "\n";
}

// 출력하기
console.log(result);
