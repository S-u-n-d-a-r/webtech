// ! 1 how to target elements

//  target Element by id
let logo = document.getElementById("logo");

console.log(logo);

let about = document.getElementById("about");

console.log(about);

// targeing elements by tagname

let lists = document.getElementsByTagName("li");
console.log(lists);

let contact = lists[2];
console.log(contact);

let login = document.getElementsByTagName("button");

console.log(login[0]);

let cards = document.getElementsByClassName("card");

console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);

let firstcard = document.querySelector(".card");
console.log(firstcard);

let p1 = document.querySelector("#para1");
console.log(p1);

let navbar = document.querySelector("nav");
console.log(navbar);

let home = document.querySelector("li");
console.log(home);

//  2 How to apply CSS

login[0].style.backgroundColor = "black";
login[0].style.color = "white";
login[0].style.padding = "10px 20px";

let section = document.getElementsByTagName("section")[0];

console.log(section);

section.style.height = "200px";
section.style.backgroundColor = "green";
section.style.display = "flex";
section.style.justifyContent = "center";
section.style.alignItems = "center";

// 3 how to write content inside element

let para1 = document.getElementById("para1");
console.log(para1);

para1.innerText = "how are you ";
para1.innerText = "This is Card 1";

cards[2].innerHTML = `<h2>Card 3 </h2>
                    <p> This is Card 3</p>
                    <button>know more</button>`;

console.log(cards[0].innerText);
console.log(cards[0].innerHTML);


