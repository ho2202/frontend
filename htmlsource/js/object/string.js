const msg1 = new String("String"); // object
const msg2 = String("String"); // string

console.log(typeof msg1);
console.log(typeof msg2);

console.log(msg1 === "String");
console.log(msg2 === "String");

console.log(`특정 위치의 문자 반환: ${msg1.charAt(3)}`);
console.log(`특정 위치의 문자 반환: ${msg1.at(3)}`);
console.log(`특정 문자의 포함 여부: ${msg1.includes("z")}`);
console.log(`문자열 부분 추출: ${msg1.substring(1, 3)}`);
console.log(`문자열 부분 추출: ${msg1.slice(1, 3)}`);
console.log(`문자열 수정: ${msg1.replace("String", "hi")}`);
console.log(`문자열 연결: ${msg1.concat(msg2)}`);
console.log(`문자열 찾기: ${msg1.match("do")}`); // null
console.log(`문자열 찾기: ${msg1.search("ng")}`); // 시작위치
console.log(`문자열 공백 제거: ${"  hello   ".trim()}`);
