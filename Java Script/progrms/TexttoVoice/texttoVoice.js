let myinput = document.querySelector("input");
let mybtn = document.querySelector("button");
let myselect = document.querySelector("select");

let allVoices = null;

speechSynthesis.addEventListener("voiceschanged", () => {
  allVoices = speechSynthesis.getVoices();
  console.log(allVoices);
  allVoices.forEach((ele) => {
    let myoption = document.createElement("option");

    myoption.innerHTML = ele.name; // UI to display
    myoption.value = ele.name; // we need to get the value
    myselect.append(myoption);
  });
});

mybtn.addEventListener("click", () => {
  let myAudio = new SpeechSynthesisUtterance(myinput.value);
  console.log(myAudio);

  let particularVoice = allVoices.find((e) => {
    if (e.name == myselect.value) {
      return e;
    }
  });

  myAudio.voice = particularVoice;
  speechSynthesis.speak(myAudio);
});
