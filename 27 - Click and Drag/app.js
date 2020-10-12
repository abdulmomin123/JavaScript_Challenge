const div = document.querySelector(".items");

let isMouseDown = false;
let draggedPx;
let lastMousePos;

function scroll(e) {
  if (!isMouseDown) return;

  lastMousePos = e.pageX;
  draggedPx = lastMousePos - draggedPx;

  div.scrollLeft = draggedPx;
  console.log(draggedPx);
}

div.addEventListener("mousedown", (e) => {
  [isMouseDown, draggedPx] = [true, e.pageX];
  div.classList.add("active");
});
div.addEventListener("mouseup", () => {
  isMouseDown = false;
  div.classList.remove("active");
});
div.addEventListener("mousemove", scroll);
