const holes = [...document.querySelectorAll(".hole")];
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

let score = 0;
let timer;

function startGame() {
  clearInterval(timer);

  timer = setInterval(() => {
    holes.forEach((hole) => {
      if (hole.classList.contains("up")) {
        hole.classList.remove("up");
      }
    });
    const random = Math.floor(Math.random() * 6);

    holes[random].classList.add("up");
  }, 500);

  moles.forEach((mole) => mole.addEventListener("click", addScore));
}

function addScore() {
  holes.forEach((hole) => {
    if (hole.classList.contains("up")) {
      hole.classList.remove("up");
    }
  });
  score++;

  //  update the score
  scoreBoard.textContent = score;
}
