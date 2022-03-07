// 입력받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 알고리즘
const T = +INPUT[0]; // 테스트 케이스의 개수
for (let t = 1; t <= T; t++) {
  let sum = 0,
    score = 1;
  for (const ox of INPUT[t]) {
    if (ox == "O") sum += score++;
    else score = 1;
  }

  // 출력하기
  console.log(sum);
}
