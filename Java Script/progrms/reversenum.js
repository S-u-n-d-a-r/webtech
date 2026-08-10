// reverse number

function revnum(num) {
  let rev = 0;
  while (num > 0) {
    let temp = num % 10;
    rev = rev * 10 + temp;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(revnum(12345));
