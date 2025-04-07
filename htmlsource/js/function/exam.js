// 함수 선언방식으로 두 개의 숫자 받아서 더하기
function add(x, y) {
  return x + y;
}
// console.log(add(2, 3));

// 함수 표현식으로 다시
const add1 = function (x, y) {
  return x + y;
};
// console.log(add1(2, 3));

// 1~10 까지 더하는 함수 표현식
const sum = function sum() {
  let result = 0;
  for (let index = 1; index < 11; index++) {
    result += index;
  }
  return result;
};
// console.log(sum());

// 3의 배수 찾고 박수 출력, 아니면 통과
const three = function (n) {
  if (n % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};
// three(2);
// three(3);
// + 9의 배수인 경우 박수x2 출력
const myFunc = function (n) {
  if (n % 3 == 0) {
    if (n % 9 == 0) {
      console.log("박수x2");
    } else {
      console.log("박수");
    }
  } else {
    console.log("통과");
  }
};
myFunc(9);

// 공인중개사 시험점수 입력하면 합격 여부를 알려줌 과목은 2개, 합해서 120 이상이면 합격, 한 과목이 40 이하면 불합격
const gongin = function (x, y) {
  const sum = x + y;
  if (x < 40 || y < 40) {
    console.log("불합격");
  } else {
    if (sum > 120) {
      console.log("합격");
    }
  }
};
gongin(40, 100);
gongin(39, 50);
