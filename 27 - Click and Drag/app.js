const div = document.querySelector(".items");

let isMouseDown = false;
let draggedPx = 0;
let lastMousePos;

function scroll(e) {
  if (!isMouseDown) return;

  lastMousePos = e.pageX;
  draggedPx += 3;

  div.scrollLeft = draggedPx;
  console.log(draggedPx);
}

div.addEventListener("mousedown", (e) => {
  [isMouseDown, draggedPx] = [true, e.pageX - div.offsetLeft];
  div.classList.add("active");
});
div.addEventListener("mouseup", () => {
  isMouseDown = false;
  div.classList.remove("active");
});
div.addEventListener("mousemove", scroll);
