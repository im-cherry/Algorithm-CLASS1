// 입력 받기
const N = +require("fs").readFileSync("/dev/stdin").toString();

// 알고리즘 시작
for (let i = 1; i <= 9; i++) {
  // 출력 하기
  console.log(`${N} * ${i} = ${N * i}`);
}
