let main = document.querySelector("main");
let section = document.querySelector("section");
let div = document.querySelector("div");
let button = document.querySelector("button");

main.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("main is clicked");
});
section.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("section is clicked");
});
div.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("div is clicked");
});
button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("buttton is clicked");
});



// Event propagation :

// How the events travel in dom tree is known as event propagation . it has 3 stages 
// 1.	Capturing ------ window to targeted element 
// 2.	Target ---------- reaching the target 
// 3.	Bubbling ------ targeted element to window object .

// All the event by default triggered in bubbling stage . if we want to triggered in capturing stage then we need to provide third argument as true for add event listner.

// If we want to stop the propagation . we can do it in two ways with hep of event object.

// 1.	stopPropagation()—it will stop the propagation but duplicate events for the same element will be triggered
// 2.	stopImmediatePropagation()—it will stop propagation and duplicate events also will not be triggerd
