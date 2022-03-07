// 입력 받기
const N = require("fs").readFileSync("/dev/stdin").toString();

// 알고리즘 시작
let result = "";
for (let n = 0; n < N; n++) {
  // 공백 찍기
  for (let m = N - 1; m > n; m--) {
    result += " ";
  }
  // 별 찍기
  for (let m = 0; m < n + 1; m++) {
    result += "*";
  }
  result += "\n";
}

// 출력 하기
console.log(result);
