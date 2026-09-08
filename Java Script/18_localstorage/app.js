//  how to add in local storage

localStorage.setItem("myname", "Sundar");
localStorage.setItem("myid", 101);
localStorage.setItem("skills", JSON.stringify(["java", "sql", "webtech"]));

// how to get data

let myname = localStorage.getItem("myname");
console.log(myname);

let myid = localStorage.getItem("myid");
console.log(myid);
console.log(typeof myid);

let skill = JSON.parse(localStorage.getItem("skills"));
console.log(skill);

// how to remove data from localstorage

localStorage.removeItem("myid");

// // how to remove all item
    localStorage.clear();
