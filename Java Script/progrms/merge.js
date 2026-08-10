let merge = () => {
  let a = [5, 9, 13];
  let b = [7, 8, 12, 18, 25, 45, 50];
  let i = 0;
  let j = 0;

  let c = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[i]) {
      c.push(a[i]);
      i++;
    } else {
      c.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    c.push(a[i]);
    i++;
  }
  while (j < b.length) {
    c.push(b[j]);
    j++;
  }
  console.log(c);
};

merge();
