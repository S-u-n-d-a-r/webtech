// spy number

function spynum(num) {
  let add = 0;
  let mul = 1;

  while (num > 0) {
    let temp = num % 10;
    add = add + temp;
    mul = mul * temp;
    num = Math.floor(num / 10);
  }
  return add == mul;
}

console.log(spynum(123));
