// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split(" ");

// 알고리즘 시작
let H = +INPUT[0];
let M = +INPUT[1];

if (M >= 45) {
  console.log(`${H} ${M - 45}`); // 출력 하기
} else {
  H = H == 0 ? 23 : H - 1;
  console.log(`${H} ${M + 15}`); // 출력 하기
}
