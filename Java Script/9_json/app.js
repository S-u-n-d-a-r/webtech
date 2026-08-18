let emp = {
  name: "miller",
  age: 10,
  isEmp: true,
};

console.log(emp);
console.log(typeof emp); //Object

//   ! jason.stringfy()

let jasondata = JSON.stringify(emp);
console.log(jasondata);
console.log(typeof jasondata); //string

// !JSON.prse()

let emp2 = JSON.parse(jasondata);
console.log(emp2);
console.log(typeof emp2); //object

// ! JSON methods apply on array

let arr = [10, 20, 30, 40];
console.log(arr);
console.log(typeof arr); //object

let arr2 = JSON.stringify(arr);
console.log(arr2);
console.log(typeof arr2); //string

let arr3 = JSON.parse(arr2);
console.log(arr3); //object

//  ! depp copy by using JSON method

let arr10 = [10, 20, 30];

let copy = JSON.parse(JSON.stringify(arr10));

copy.push("html");

arr10.shift();

console.log(copy);
console.log(arr10);
