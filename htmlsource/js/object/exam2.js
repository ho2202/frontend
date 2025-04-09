// 2개의 주사위를 던졌을 때 출력하고 눈의 합이 5가 아니면 계속 주사위를 던짐
function rollingDice() {
  let dice1;
  let dice2;
  do {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(`[${dice1}, ${dice2}]`);
  } while (dice1 + dice2 != 5);
}
rollingDice();
console.log();

// 로또 번호 6개를 추출해서 배열에 담은 후 출력
function lotto() {
  let list = [];
  while (list.length < 6) {
    ball = Math.floor(Math.random() * 45) + 1;
    if (!list.includes(ball)) {
      list.push(ball);
    }
  }
  console.log(list.sort((a, b) => a - b));
  return list;
}
lotto();
