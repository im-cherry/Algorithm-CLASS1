// 입력받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const A = +INPUT[0];
const B = +INPUT[1];

// 알고리즘
const add = A + B;
const sub = A - B;
const mul = A * B;
const div = Math.trunc(A / B);
const re = A % B;

// 출력하기
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(re);
