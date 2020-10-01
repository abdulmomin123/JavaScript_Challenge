const inputs = [...document.querySelectorAll("input")];

let firstClick;
let secondClick;
let forward;

inputs.forEach((input, i, src) =>
  input.addEventListener("click", (e) => {
    if (e.shiftKey) {
      secondClick = i;
    } else {
      firstClick = i;
    }

    if (secondClick - firstClick >= 0) {
      forward = true;
    } else {
      forward = false;
    }

    if (e.shiftKey) {
      if (forward) {
        for (i = firstClick; i < secondClick; i++) {
          src[i].checked = true;
        }
      } else {
        for (i = firstClick; i > secondClick; i--) {
          src[i].checked = true;
        }
      }
    }
  })
);
