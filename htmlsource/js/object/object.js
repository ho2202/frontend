let tv = new Object();

console.log(tv);

tv.color = "red";
tv.power = true;
tv.volume = 13;
tv.info = function () {
  console.log("색상 : ", this.color);
  console.log("음량 : ", this.volume);
  console.log("전원 : ", this.power);
};
tv.info();

let person = {
  name: ["bob", "smith"],
  age: 32,
  gender: "male",
  interest: ["music", "skiing"],
  greeting: function () {
    console.log("Hi i'm " + this.name[0] + ".");
  },
};
console.log(person.age);
console.log(person.name);
console.log(person["name"]);

person.age = 24;
function (){}

let output = "";
for (const key in person) {
    output += ` ${key} : ${person[key]}\n`
}
console.log(output);
