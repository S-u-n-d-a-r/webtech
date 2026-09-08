// 1 Load

window.addEventListener("load", () => {
  console.log("page is loaded");

  let h2 = document.createElement("h2");

  h2.innerText = "Welcome to this webpage";
  let h1 = document.querySelector("h1");
  h1.after(h2);
  setTimeout(() => {
    h2.remove();
  }, 3000);
});

let count = 0;
window.addEventListener("scroll", () => {
  console.log("window is scorlling", count++);
});

window.addEventListener("resize", ()=>{
    console.log("window size is changed" ,window.innerWidth);
    
})