let div = document.querySelector("div");
let button = document.querySelector("button");

div.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  div.style.backgroundColor = "lightblue";
});

button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  button.style.backgroundColor = "yellow";
});
