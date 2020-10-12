const div = document.querySelector(".items");

let isMouseDown = false;
let draggedPx;

function scroll(e) {
  if (!isMouseDown) return;
  console.log(e);
}

div.addEventListener("mousedown", () => (isMouseDown = true));
div.addEventListener("mouseup", () => (isMouseDown = false));
div.addEventListener("mousemove", scroll);
