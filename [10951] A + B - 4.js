// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 알고리즘
let line, A, B;
for (let i = 0; i < INPUT.length - 1; i++) {
  line = INPUT[i].split(" "); // 한 줄 읽기
  A = +line[0];
  B = +line[1];

  // 출력하기
  console.log(A + B);
}
