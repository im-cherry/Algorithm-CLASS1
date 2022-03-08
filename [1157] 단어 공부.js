// 입력받기
const WORD = require("fs").readFileSync("/dev/stdin").toString().toUpperCase();

/**
 * 알고리즘
 * 주어진 단어에서 가장 많이 사용된 알파벳(대문자) 출력하기 (대소문자 구분X)
 * 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ? 출력하기
 */
let alpha; // 가장 많이 사용된 알파벳
let cnt = 0; // 가장 많이 사용된 알파벳 빈도수
for (const item of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  let regexp = new RegExp(item, "g");
  let tmp = WORD.match(regexp); // 주어진 단어에서 사용된 item 찾기

  // item 이 있는 경우
  if (tmp != null) {
    let tmpCnt = tmp.length; // 빈도수 구하기

    // 빈도수와 가장 많이 사용된 알파벳 갱신하기
    if (tmpCnt > cnt) {
      cnt = tmpCnt;
      alpha = item;
      continue;
    }
    if (tmpCnt == cnt) alpha = "?"; // 가장 많이 사용된 알파벳이 여러개 존재하는 경우
  }
}

// 출력하기
console.log(alpha);
