// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split(" ");

// 알고리즘
const ANSWER = INPUT[0].charCodeAt(0);

// 출력 하기
console.log(ANSWER);
