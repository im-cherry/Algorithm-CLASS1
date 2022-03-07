// 입력받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split(" ");

// 알고리즘
const A = INPUT[0].split("").reverse().join("");
const B = INPUT[1].split("").reverse().join("");

// 출력하기
console.log(A > B ? A : B);
