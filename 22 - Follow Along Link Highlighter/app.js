const hl = document.querySelector(".hl");

window.addEventListener("mousemove", (e) => {
  console.log(e.offsetX);
  hl.style.top = `${e.offsetY}px`;
  hl.style.left = `${e.offsetX}px`;
});
