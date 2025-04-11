// // 비동기식 JS와 XML.
console.log("시작");
// setTimeout(() => {
//   console.log("중간");
// }, 3000);
// console.log("마무리");

// fetch("서버 주소").then("응답도착 => 적절한 타입으로 리턴").then("도착 처리");

fetch("https://jsonplaceHolder.typeicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("마무리");
