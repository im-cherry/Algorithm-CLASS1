// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 알고리즘 시작
const T = INPUT[0]; // 테스트 케이스 수
let line, A, B; // 두 정수
let t = 1;
while (t <= T) {
  line = INPUT[t++].split(" "); // t번째 줄 읽기
  A = +line[0];
  B = +line[1];

  // 출력하기
  console.log(A + B);
}
