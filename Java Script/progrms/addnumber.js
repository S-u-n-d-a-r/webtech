let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstnumber = Number(document.getElementById("Firstnumber").value);
  let secondnumber = Number(document.getElementById("secondnumber").value);

  let sum = firstnumber + secondnumber;

  let h1 = document.getElementById("result");
  h1.innerText = `The addition of ${firstnumber} and ${secondnumber} is ${sum}`;
});
