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


let wish=()=>{
  console.log("happy birthday");
  
}

let greetings = (myFunc)=>{
  myFunc()
}

greetings(wish)





