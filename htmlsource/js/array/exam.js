let numArr = [57, 273, 588, 32, 54, 100, 310, 2];

let max = numArr[0];
let min = numArr[0];

for (const num of numArr) {
  if (num > max) {
    max = num;
  } else {
    if (num < min) {
      min = num;
    }
  }
}
console.log(`최댓값 : ${max}, 최솟값: ${min}`);

max = numArr[0];
min = numArr[0];

numArr.forEach((num) => {
  if (num > max) {
    max = num;
  } else {
    if (num < min) {
      min = num;
    }
  }
});
console.log(`최댓값 : ${max}, 최솟값: ${min}`);
