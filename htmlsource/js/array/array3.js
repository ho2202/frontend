const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const others = ["과일", 1, 3.14, new Date(), true, {}];
const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const plant = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");
const num = [1, 4, 2];
console.log("배열 요소 연결 ", fruits.join("-"));
console.log("배열 연결 ", fruits.concat(array1));
console.log("배열 분할 ", fruits.slice(1, 3));
console.log("배열 정렬 " + array1.sort());
console.log("배열 정렬 " + num.sort((a, b) => a - b));
console.log("배열 역순 출력 ", fruits.reverse());
console.log("포함 여부" + fruits.includes("딸기"));

let numArr3 = [57, 273, 588, 32, 54, 100, 310, 2];
console.log(
  "30보다 큰 ",
  numArr3.find((item) => item > 30)
);
console.log("map: " + numArr3.map((item) => item + 2));
console.log("filter: " + numArr3.filter((item) => item < 10));

let shallowCopy = [...fruits];
let fruits2 = fruits;

const arr = new Array(5).fill(1);
console.log(arr);

let array4 = [
  [1, 2, 3],
  [4, 5, [6, 7]],
];
console.log(array4.flat(2));

let numArr = [1, 2, 3];
let numArr2 = [4, 5, 6];
let toArr = [numArr, numArr2];
let toArr2 = [...numArr];
