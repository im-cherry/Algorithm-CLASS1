// 입력 받기
const N = +require("fs").readFileSync("/dev/stdin").toString();

// 알고리즘 시작
const arr = Array.from({ length: N }, (_, i) => N - i);

// 출력 하기
console.log(arr.join("\n"));
