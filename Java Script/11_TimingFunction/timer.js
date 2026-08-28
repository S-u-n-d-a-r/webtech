console.log("hello");

let wish = () => {
  console.log("Happy Aniversary ❤️");
};

// wish();

let timer1 = setTimeout(wish, 5000);

console.log("😊");

let timer2 = setTimeout(() => {
  console.log("this is settimeout");
}, 7000);

clearTimeout(timer1);

let sorry = () => {
  console.log("sorry💔");
};

let timer3 = setInterval(sorry);

let timer4 = setInterval(() => {
  console.log("i am setinterval");
}, 1000);
clearInterval(timer3);
clearInterval(timer4);
