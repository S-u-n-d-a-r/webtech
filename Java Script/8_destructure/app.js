let student = {
  sname: "dhoni",
  age: 7,
  isPlayer: true,
  skills: ["math", "rhymes", "gk", "drawing"],
};

console.log(student.sname);

let { sname, skills, isPlayer, age } = student;

console.log(sname);
console.log(age);
console.log(skills);

// Rest Parameter (...)

function f1(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

f1(10, 20, 30, 40, 50);

//  ! spread operator

let frontend = ["html", "css", "js", "react"];

let backend = ["node", "express", "mongodb"];

console.log(frontend);
console.log(...frontend);

let fullstack = [...frontend, ...backend];
console.log(fullstack);

// ! merge two object by using spread

let ob1 = {
  obname: "pen",
};

let ob2 = {
  price: 30,
};

let ob3 = { ...ob1, ...ob2 };

console.log(ob3);
console.log(
  "--------------------------------------------------------------------------",
);

// ! shallow copy deep copy

let subjects = ["java", "python", "sql"];

let copy = [...subjects];

copy.push("webtech");

console.log(copy);
console.log(subjects);
