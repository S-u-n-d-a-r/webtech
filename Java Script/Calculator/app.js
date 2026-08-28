let addDigits = (digit) => {
  console.log(digit);
  let input = document.querySelector("input");

  input.value += digit;
};
let calculate = () => {
  let input = document.querySelector("input");

  let expression = input.value;

  let ans = eval(expression);
  input.value = ans;

  console.log("done");
};
let clean = () => {
  let input = document.querySelector("input");

  input.value = "";
};
