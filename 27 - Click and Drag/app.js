const div = document.querySelector(".items");

let isMouseDown = false;
let scrollLeft;
let startX;

function scroll(e) {
  if (!isMouseDown) return;
  e.preventDefault();

  const x = e.pageX - div.offsetLeft;
  const walk = x - startX;
  div.scrollLeft = scrollLeft - walk;
}

div.addEventListener("mousedown", (e) => {
  startX = e.pageX - div.offsetLeft;
  isMouseDown = true;
  scrollLeft = div.scrollLeft;
  div.classList.add("active");
});
div.addEventListener("mouseup", () => {
  isMouseDown = false;
  div.classList.remove("active");
});
div.addEventListener("mousemove", scroll);
