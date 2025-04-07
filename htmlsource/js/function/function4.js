function show() {
  document.write("동의");
}
function showCancel() {
  document.write("취소");
}
function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}
// ask("동의하십니까?", show, showCancel);

const foo = function (func) {
  func();
};
foo(() => console.log("함수를 인자로 전달"));

function call(callback) {
  for (let index = 0; index < 5; index++) {
    callback();
  }
}
const callback = () => console.log("함수 호출");
call(callback);

// setTimeout(() => {
//   console.log("3초");
// }, 3000);
console.log("마무리");

console.log(parseFloat("10"));
console.log(parseFloat("10.5%"));

console.log(encodeURI("www.google.com/search?q=함수+표현식"));
console.log(encodeURIComponent("www.google.com/search?q=함수+표현식"));
console.log(decodeURIComponent("www.google.com/search?q=%ED%95%A8%EC%88%98+%ED%91%9C%ED%98%84%EC%8B%9D"));
