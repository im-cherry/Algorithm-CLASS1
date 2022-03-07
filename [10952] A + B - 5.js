// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 알고리즘 시작
let i = 0;
let line, A, B;
while (true) {
  if (INPUT[i] == "0 0") break; // 마지막 줄 인 경우, 종료

  line = INPUT[i++].split(" "); // 한 줄 읽기
  A = +line[0];
  B = +line[1];

  // 출력하기
  console.log(A + B);
}
