let form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let studName = document.getElementById("studName").value;
  let studRollno = document.getElementById("studrollno").value;
  let studphno = document.getElementById("studphno").value;

  console.log(studName);
  console.log(studRollno);
  console.log(studphno);

  console.log("register done");
});
