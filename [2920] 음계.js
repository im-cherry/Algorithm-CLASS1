// 입력받기
const arr = require("fs").readFileSync("/dev/stdin").toString().split("\n")[0];

// 알고리즘
const asc = "1 2 3 4 5 6 7 8";
const desc = "8 7 6 5 4 3 2 1";

const ANSWER = arr == asc ? "ascending" : arr == desc ? "descending" : "mixed";

// 출력하기
console.log(ANSWER);
