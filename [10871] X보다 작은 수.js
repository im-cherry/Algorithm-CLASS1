// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const firstLine = INPUT[0].split(" ");
const secondLine = INPUT[1].split(" ");

// 알고리즘
let N = firstLine[0];
let X = firstLine[1];
let A;
let result = "";
for (let n = 0; n < N; n++) {
  A = +secondLine[n];

  if (A < X) result += `${A} `;
}

// 출력하기
console.log(result);
