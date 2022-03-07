// 입력받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 알고리즘
let set = new Set();
for (let i = 0; i < 10; i++) {
  set.add(INPUT[i] % 42);
}

// 출력하기
console.log(set.size);
