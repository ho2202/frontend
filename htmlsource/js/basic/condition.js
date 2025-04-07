// 조건문
const date = new Date();
console.log(date);
const hour = date.getHours();
if (hour < 12) {
  console.log("오전");
} else {
  console.log("오후");
}

// NaN : 숫자 아님
console.log("\n=== is NaN()");
console.log(isNaN("12"));
console.log(isNaN("abc"));
console.log("=========");

const num1 = Number("23");
console.log(typeof num1);
console.log(Number("a"));
console.log(typeof parseInt("33"));
console.log("33 20 10 >>", parseInt("33 20 10"));
console.log(" 33 20 10 >>", parseInt(" 33 20 10"));

if (isNaN(Number("123"))) {
  console.log("문자");
} else {
  console.log("숫자");
}

console.log("=========");
switch (date.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log("오늘은 " + day);
