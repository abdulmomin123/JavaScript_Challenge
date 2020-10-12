const div = document.querySelector(".items");

let isMouseDown = false;
let draggedPx;

function scroll(e) {
  if (!isMouseDown) return;

  draggedPx = e.offsetX - draggedPx;
  console.log(e);
}

div.addEventListener("mousedown", (e) => {
  [isMouseDown, draggedPx] = [true, e.offsetX];
  div.classList.add("active");
});
div.addEventListener("mouseup", () => {
  isMouseDown = false;
  div.classList.remove("active");
});
div.addEventListener("mousemove", scroll);
