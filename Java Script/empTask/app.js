let form = document.querySelector("form");
let table = document.querySelector("table");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let eid = document.getElementById("eid").value;
  let ename = document.getElementById("ename").value;
  let dept = document.getElementById("dept").value;
  let sal = document.getElementById("sal").value;

  console.log({ eid, ename, dept, sal });

  let tr = document.createElement("tr");

  tr.innerHTML = `<td>${eid}</td>
  <td>${ename}</td>
  <td>${dept}</td>
  <td>${sal}</td>`;

  table.append(tr);
  console.log("emp is added");
});
