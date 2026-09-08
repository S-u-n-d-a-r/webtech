function showDateTime() {
  let now = new Date();

  let h2 = document.querySelector("h2");
  h2.innerText = now.toLocaleTimeString();

  let h3 = document.querySelector("h3");
  h3.innerText = now.toLocaleDateString();
}

showDateTime();

setInterval(showDateTime, 1000);
