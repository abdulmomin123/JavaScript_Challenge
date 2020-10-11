const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

function addVoice(e) {
  voices = this.getVoices();
  voices.forEach((el) => {
    voicesDropdown.insertAdjacentHTML(
      "beforeend",
      `<option value="${el.name}">${el.name}, (${el.lang})</option>`
    );
  });
}

function setVoice(e) {
  msg.voice = voices.find((el) => el.name === this.value);
  toggle();
}

function toggle() {
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

speechSynthesis.addEventListener("voiceschanged", addVoice);
voicesDropdown.addEventListener("change", setVoice);
