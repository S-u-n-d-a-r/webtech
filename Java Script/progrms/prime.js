let isprime = function (n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  return count == 2;
};

console.log(isprime(11));

console.log("prime number in range ");

for (let j = 2; j <= 20; j++) {
  if (isprime(j)) {
    console.log(j);
  }
}
