// let t = 0;
// for (let index = 0; index < 11; index++) {
//   t += index;
// }
// console.log("1~10합: ", t);

// let index = 0;
// t = 0;
// while (index < 100) {
//   console.log(index);
//   index++;
//   t += index;
// }
// console.log("1~100합: ", t);

// index = 0;
// t = 0;
// do {
//   index++;
//   t += index;
// } while (index < 100);
// console.log("1~100합: ", t);

console.log("객체 출력");
const myCar = { make: "BMW", model: "X5", year: 2013 };
let txt = "";
for (const key in myCar) {
  txt += myCar[key] + " ";
}
console.log("myCar", txt);

const music = { singer: "아델", time: 15, title: "hello" };
for (const key in music) {
  console.log(`${key}:${music[key]}`);
}
console.log("=======break=====");
for (let index = 0; index < 101; index++) {
  if (index == 10) {
    break;
  }
  console.log(index);
}
console.log("=======continue=====");
for (let index = 0; index < 101; index += 2) {
  if (index == 0) {
    continue;
  }
  if (index == 20) {
    break;
  }
  console.log(index);
}
