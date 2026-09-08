let input = document.querySelector("input");

let generatepassword = () => {
  let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small = caps.toLowerCase();
  let special = "!@#$%^&*";
  let numbers = "0123456789";

  let pass = "";
  let first = caps[Math.floor(Math.random() * caps.length)];
  let second = small[Math.floor(Math.random() * small.length)];
  let third = special[Math.floor(Math.random() * special.length)];
  let fourth = numbers[Math.floor(Math.random() * numbers.length)];
  pass = first + second + third + fourth;
  console.log(pass);

  input.value = pass;
};
let generate = document.querySelector("button");
generate.addEventListener("click", generatepassword);

let img = document.querySelector("img");
console.log(img);

img.addEventListener("click", () => {
  if (input.type == "password") {
    input.type = "text";
    img.src = "./hide.png";
  } else {
    input.type = "password";
    img.src = "./view.png";
  }
});

let copybtn = document.getElementById("copy");
copybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  input.select();
});
