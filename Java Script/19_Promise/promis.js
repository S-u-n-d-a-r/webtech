let p1 = new Promise((resolve, reject) => {});

console.log(p1);

let p2 = new Promise((resolve, reject) => {
  resolve("this promis is resolved");
});

console.log(p2);

let p3 = new Promise((resolve, reject) => {
  reject("Sorry, this is rejected");
});

console.log(p3);

p2.then((data) => {
  console.log(data);
});
p3.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
