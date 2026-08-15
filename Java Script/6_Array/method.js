// let arr=[10,20,30,40,50]

// arr.map((ele, index,array)=>{
//     console.log(ele, index, array);
// })

// ! 1.MAP
let price = [1000, 750, 250, 500];
// let updatedprice=[]
let updatedprice = price.map((ele) => {
  return ele + 200;
});

console.log(updatedprice);

let subjects = ["sql", "java", "node", "python"];

let upperarr = subjects.map((ele) => {
  return ele.toUpperCase();
});

console.log(upperarr);

// ! 2 filter()

let marks = [56, 75, 59, 80, 65, 90, 45, 88, 70];
let highest = marks.filter((ele) => {
  return ele > 70;
});

console.log(highest);

let nums = [1, 2, 3, 4, 5];
let sum = 0;
nums.map((ele) => {
  sum = sum + ele;
});

console.log(sum);

let nums1 = [1, 2, 3, 4, 5];

let sum1 = nums1.reduce((acc, ele) => {
  return acc + ele;
});

console.log(sum1);

let sum2 = nums1.reduce((acc, ele) => {
  return acc * ele;
});
console.log(sum2);

let unsorterd = [5, 2, 4, 1, 3];

let acc = unsorterd.sort((a, b) => {
  return a - b;
});
console.log(acc);


