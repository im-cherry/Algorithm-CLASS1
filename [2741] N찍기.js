// 입력 받기
const N = +require("fs").readFileSync("/dev/stdin").toString();

// 알고리즘
let arr = Array.from({ length: N }, (_, i) => i + 1);

// 출력하기
console.log(arr.join("\n"));
