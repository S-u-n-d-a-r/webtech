let inner = document.querySelector(".inner");
let middle = document.querySelector(".middle");
let outer = document.querySelector(".outer");

inner.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("inner is clicked ");
});
middle.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("middle is clicked ");
});
outer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("outer is clicked ");
});

let ol = document.querySelector("ol");

ol.addEventListener("click", (e) => {
  console.log(e.target.innerText);
});
