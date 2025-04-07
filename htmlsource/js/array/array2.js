const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const others = ["과일", 1, 3.14, new Date(), true, {}];
const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const plant = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

console.log("배열 길이: ", fruits.length);
console.log("배열 => 문자열: ", fruits.toString());
console.log("배열 요소 조회: ", fruits[2]);
console.log("배열 특정 요소 조회: ", fruits.at(2));
console.log("============");
fruits.push("메론");
console.log("메론 추가: ", fruits.toString());
fruits.unshift("키위");
console.log("맨 앞에 키위 추가: ", fruits.toString());
fruits[3] = "딸기";
console.log("요소 수정: ", fruits.toString());

array1.splice(2, 0, "킥보드");
console.log("추가 후 확인", array1.toString());

console.log("\n 요소 삭제");
console.log("요소 삭제 전: ", fruits.toString());
fruits.pop();
console.log("요소 삭제 후: ", fruits.toString());
fruits.shift();
console.log("요소 삭제 전: ", others.toString());
others.splice(2, 2);
console.log("요소 삭제 후: ", others.toString());
