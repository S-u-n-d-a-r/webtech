let outer = () => {
  let a = 20;
  let inner = () => {
    a = a + 1;
    console.log(a);
  };
  return inner;
};

let ans = outer();

ans(); //21
ans(); //22
ans(); //23
ans(); //24
ans(); //25

console.log("---------------------------------------");

// ! Function Curring

function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(2, 3, 4));

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let sum = add(1)(2)(3);

console.log(sum);

let add2 = (a) => (b) => (c) => a + b + c;

console.log(add2(10)(20)(30));
