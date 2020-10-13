const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

let mousePos;
let rate;

speed.addEventListener("mousemove", (e) => {
  mousePos = e.pageY - speed.offsetTop;

  bar.style.height = mousePos + "px";
  console.log(mousePos);
});
