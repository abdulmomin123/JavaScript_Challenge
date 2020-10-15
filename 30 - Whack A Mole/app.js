const holes = [...document.querySelectorAll(".hole")];
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

function startGame(e) {
  const timer = setInterval(() => {
    holes.forEach((hole) => {
      if (hole.classList.contains("up")) {
        hole.classList.remove("up");
      }
    });
    const random = Math.floor(Math.random() * 6);

    holes[random].classList.add("up");
  }, 500);
}
