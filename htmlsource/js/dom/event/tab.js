const tabs = document.querySelectorAll(".tab-button");
const tabCon = document.querySelectorAll(".tab-content");

tabs.forEach((element, idx) => {
  element.addEventListener("click", (e) => {
    tabs.forEach((item) => item.classList.remove("orange"));
    e.target.classList.add("orange");

    tabCon.forEach((element) => element.classList.remove("show"));
    // console.log(tabCon[idx].textContent);
    tabCon[idx].classList.add("show");
  });
});
