let date = new Date();
console.log(date);

console.log("Houre is :", date.getHours());
console.log("Minutes is :", date.getMinutes());
console.log("second is :", date.getSeconds());
console.log("Millisecond is :", date.getMilliseconds());
console.log("time is :", date.toLocaleTimeString());

console.log("year is :", date.getFullYear());
console.log("month is :", date.getMonth());

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log("month is :", months[date.getMonth()]);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("Today is ", days[date.getDay()]);

let num1 = 20;
let num2 = "20";

console.log(num1 == num2); //true
console.log(num1 === num2); //fale

// difference b/w for in and for of loops in array
console.log("difference b/w for in and for of loops in array");

for (let ele in arrmon) {
  console.log(ele);
}
for (let ele of arrmon) {
  console.log(ele);
}

// difference b/w for in and for of loops in string
let s1 = "lokesh is a gud boy";
console.log("difference b/w for in and for of loops in string");

for (let ele in s1) {
  console.log(ele);
}
for (let ele of s1) {
  console.log(ele);
}

// difference b/w for in and for of loops in objects
let obj = {
  name: "loki",
  age: 22,
  degree: "ai",
};
console.log("difference b/w for in and for of loops in objects");

for (let ele in obj) {
  console.log(ele);
}
// for (let ele of s1) {   -------------> in objects it is not possible
//   console.log(obj);}
