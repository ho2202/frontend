let div = document.querySelector("div");
console.log(div);

div = document.querySelector(".container-fluid");
console.log(div);

let divs = document.querySelectorAll("div");
console.log(divs);

divs.forEach((div) => {
  console.log(div);
});

let btn = document.querySelector(".navbar-toggler");
console.log(btn);

let form = document.querySelector(".d-flex");
console.log(form);

form = document.querySelector("[role='search']");
console.log(form);

let table = document.querySelector("table");
console.log(table);

let thread = document.querySelector("thead");
thread = document.querySelector("thead > thead");

let tr = document.querySelector("tbody tr:nth-child(2)");
console.log(tr);
