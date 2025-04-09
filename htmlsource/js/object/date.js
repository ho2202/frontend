const now = new Date();
console.log(now);

console.log("연: " + now.getFullYear());
console.log("월: " + now.getMonth());
console.log("일: " + now.getDate());
console.log("시: " + now.getHours());
console.log("분: " + now.getMinutes());
console.log("초: " + now.getSeconds());

console.log(now.toLocaleString());
