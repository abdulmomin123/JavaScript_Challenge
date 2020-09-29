const keys = [...document.querySelectorAll(".key")];

window.onkeydown = (e) => {
  const pressedKey = e.which;

  keys.forEach((key) => {
    if (pressedKey == key.dataset.key) {
      const audio = `sounds/${key.querySelector(".sound").textContent}.wav`;
      const markup = `
        <audio autoplay src="${audio}"></audio>

      `;

      //  Add class
      key.classList.add("playing");

      // play audio
      key.insertAdjacentHTML("beforeend", markup);

      // remove class
      setTimeout(() => {
        key.classList.remove("playing");
      }, 50);
    }
  });
};
