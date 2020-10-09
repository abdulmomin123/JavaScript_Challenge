window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.start();

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = [...e.results].map((el) => el[0].transcript).join();
  console.log(transcript);
});
recognition.addEventListener("end", recognition.start);
