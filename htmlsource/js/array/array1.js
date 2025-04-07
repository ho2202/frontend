const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const others = ["과일", 1, 3.14, new Date(), true, {}];
const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const plant = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

console.log("\n for i 사용");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("\n for of 사용");
for (const e of others) {
  console.log(e);
}
array1.forEach((element) => {
  console.log(element);
});
console.log(plant);
console.log(plant.toString);
