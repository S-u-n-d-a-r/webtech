let str = "hello how are you";

// output => olleh woh era uoy

let words = str.split(" ");

let ans = "";

for (let word of words) {
  let rev = "";

  for (let i = word.length - 1; i >= 0; i--) {
    rev = rev + word.charAt(i);
  }
  ans = ans + rev + " ";
}
console.log(ans);
console.log(ans.length);
ans = ans.trim();
console.log(ans);
console.log(ans.length);










let sortedOrRoteted = (arr) => {
  let count = 0;
  for (let i = 0; arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) count++;
  }
  if (arr[arr.length - 1] > arr[0]) count++;

  return count <= 1;
};

console.log(sortedOrRoteted([10, 20, 30, 40, 50]));
