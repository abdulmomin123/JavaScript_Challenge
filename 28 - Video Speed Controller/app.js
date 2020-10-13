const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", (e) => {
  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const min = 0.4;
  const max = 4;
  const rate = percent * (max - min) + min;

  bar.style.height = percent * 100 + "%";
  bar.textContent = rate.toFixed(2);
});
