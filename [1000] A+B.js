// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const A = +INPUT[0];
const B = +INPUT[1];

// 알고리즘
const ANSWER = A + B;

// 출력
console.log(ANSWER);
