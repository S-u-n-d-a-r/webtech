// 4 how to add or remove the  class from any element

let container = document.getElementById("conainer");
console.log(container);

console.log(container.classList);

container.classList.remove("dark");
container.classList.add("green");

// 5. how to create any element

let para = document.createElement("p");
para.innerText = "i am paragraph";

// container.append(para)
// container.prepend(para)
// container.before(para);
container.after(para);

let li = document.createElement("li");

li.innerText = "html";

let ol = document.querySelector("ol");

ol.append(li);


let sub1 = document.createElement("li")
sub1.innerText = "python"
let sub2 = document.createElement("li")
sub2.innerText = "html"
let sub3 = document.createElement("li")
sub3.innerText = "css"
let sub4 = document.createElement("li")
sub4.innerText = "js"

let ol = document.querySelector ("ol")


 

