// 입력 받기
const INPUT = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = +INPUT[0]; // 과목의 개수
const scores = INPUT[1].split(" "); // 점수

/**
 * 알고리즘
 * 1. 점수 중 최댓값(M) 고르기
 * 2. 모든 점수를 점수/M*100 으로 고치기
 * 3. 고친 점수로 평균 구하기
 */

// 1. 점수 중 최댓값(M) 고르기
const M = Math.max(...scores); // 최대 점수

// 2. 모든 점수를 점수/M*100 으로 고치기
const changeScores = scores.map((score) => {
  return (score / M) * 100;
});

// 3. 고친 점수로 평균 구하기
let sum = 0;
for (const score of changeScores) {
  sum += score;
}

// 출력
console.log(sum / N);
