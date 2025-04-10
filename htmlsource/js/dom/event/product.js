const products = [
  { id: 0, price: 90000, title: "Blossum Dress" },
  { id: 1, price: 70000, title: "Springfield" },
  { id: 2, price: 80000, title: "Black" },
];

// const titles = document.querySelectorAll("h5");
// const prices = document.querySelectorAll("p");

// products.forEach((item, idx) => {
//   titles[idx].textContent = item.title;
//   prices[idx].textContent = "가격: " + item.price;
// });
// const divs = document.querySelectorAll(".col-sm-4");
// divs.forEach((col, idx) => {
//     col.querySelector("h5").textContent = products[idx].title;
//     col.querySelector("p").textContent = "가격: " + products[idx].price;
//   });

const row = document.querySelector(".row");
let tags = "";
products.forEach((item, idx) => {
  tags += `<div class="col-sm-4">`;
  tags += `<img src="https://placehold.co/600" alt="" class="w-100" />`;
  tags += `<h5>${item.title}</h5>`;
  tags += `<p>가격: ${item.price}</p>`;
  tags += `</div>`;
});
row.insertAdjacentHTML("afterbegin", tags);
