function showMessege() {
  console.log("안녕하세요");
}
showMessege();

function multyply(x, y) {
  console.log(`${x}, ${y}`);
}
multyply();
multyply(1);
multyply(1, 2);

function multyply2(x, y) {
  return x * y;
}
console.log(multyply2(2, 4));
console.log(multyply2(2));
console.log(multyply2);

function multyply3(x, y = 3) {
  return x * y;
}
console.log(multyply3(2, 5));
console.log(multyply3(2));

function test(a, b, c, d) {
  b = b || 52;
  c = c || 272;
  console.log(`A=${a} B=${b} C=${c}, D=${d}`);
}
test(1, 2, 3, 5);
test(4);

function a() {
  function b() {
    console.log("b");
  }
  if (true) {
    function c() {}
  }
  b();
  c();
}
a();
