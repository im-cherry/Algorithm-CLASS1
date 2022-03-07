// 입력받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 알고리즘
let result = 0;
for (const num of INPUT[1]) {
  result += +num;
}

// 출력하기
console.log(result);
