let select = document.querySelector("select");
console.log(select);

select.addEventListener("change", (e) => {
  let color = e.target.value;
  console.log("changed");
  document.body.style.backgroundColor = color;
});

let input = document.querySelector("input");

let h2 = document.querySelector("h2");
input.addEventListener("change", (e) => {
  h2.innerText = e.target.value;
});
