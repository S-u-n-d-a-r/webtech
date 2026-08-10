let str1 = "hi";
let str2 = "hi";
let str3 = `hi
hello 
how 
are 
you`;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);

console.log(str3);

let a = 10;
let b = 20;

let myname = "Soonapana";

console.log(`the addition of ${a} and ${b} is :${a + b}`);

console.log(`my name is : ${myname}`);

let msg = "how are you";
console.log(msg.length);

//toUppercase & toLowercase

let str4 = "Kratos";
let z = str4.toUpperCase();
let y = str4.toLowerCase();
console.log(str4);
console.log(z);

//trim()

let str6 = "  hi   ";
let str7 = str6.trim();
console.log(str6.length);
console.log(str7.length);

//indexof

let str8 = "hello how are you";
// console.log(str8.indexOf(⁠ o ⁠));

// //lastIndexof

let str9 = "hello how are you";
// console.log(str8.lastIndexOf(⁠ o ⁠));

// //charAt
// console.log(str9.charAt(3));

//concat
console.log(str7.concat(" ", str8));

//includes
console.log(str8.includes("me"));

//replace

let sentance = `i am from bangalore, i love bangalore`;

console.log(sentance.replace("bangalore", "chennai"));

//replaceAll

let password = "hello";
console.log(password.replaceAll("l", "$"));
console.log(sentance.replaceAll("bangalore", "chennai"));

// split

let greet = "how are you";

console.log(greet.split(" "));
console.log(greet.split(""));
console.log(greet.split());

// slice

let msg1 = "how are you";

console.log(msg1.slice(0, 2)); //ho
console.log(msg1.slice(4)); // are you

console.log(msg1.slice(3, 0)); //

console.log(msg1.slice(-3)); // you
console.log(msg1.slice(0, -1)); //how are yo

//substring

console.log(msg1.substring(0, 2)); //ho
console.log(msg1.substring(4)); // are you

console.log(msg1.substring(3, 0)); // how

console.log(msg1.substring(-3)); // you



