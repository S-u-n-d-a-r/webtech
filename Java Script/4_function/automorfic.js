let num = function (num) {
  let sq = num * num;

  while (num > 0) {
    let numld = num % 10;
    let sqlld = sq % 10;
    if (numld != sqlld) {
      return false;
    }
    num = Math.floor(num / 10);
    sq = Math.floor(sq / 10);
  }
  return true;
};

console.log(num(25));

let outer = () => {
  console.log("i am outer function");
  let a = 10;
  let inner = () => {
    let b = 20;
    console.log("i am inner function");
    console.log("a value is ", a);
    console.log("b value is", b);
  };
  // console.log(b); cannot access the variable out side the function
  inner();
};
outer();

console.log("****higher orderfunction****");

let wish = () => {
  console.log("happy birthday");
};

let greetings = (myFunc) => {
  myFunc();
};

greetings(wish);

greetings(() => {
  console.log("i am callback function");
});

// example of Higherorder and callback function

let add = (a, b) => {
  console.log("addition is ", a + b);
};
let sub = (a, b) => {
  console.log("subtraction is ", a - b);
};
let mul = (a, b) => {
  console.log("multiplication is ", a * b);
};
let division = (a, b) => {
  console.log("division is ", a / b);
};

let calculator = (task, num1, num2) => {
  task(num1, num2);
};

calculator(add, 10, 39);
calculator(sub, 100, 30);
calculator(mul, 19, 21);
calculator(
  division,
  49,
  7,
)(
  // {
  //   var x=10;
  //   let y=20;
  //   const z=30;
  //   console.log(x);
  //   console.log(y);
  //   console.log(z);
  // }
  //   console.log(x);
  //   console.log(y);
  //   console.log(z);

  // function scope() {
  //   for (var i = 0; i <= 5; i++) {

  //   }
  //  console.log(i);

  // }

  // scope();

  // console.log(x); //undefined
  // var x;

  // console.log(y);//undefined
  // var y;

  function () {
    console.log("database connected");
  },
)();

(function (port) {
  console.log("server is running on port number", port);
})(3000);
