function isrotation(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }

  return (s1 + s2).includes(s2);
}

let s1 = "javascript";
let s2 = "scriptjava";

console.log(isrotation(s1, s2));

//frequency

function frequency(str) {}
