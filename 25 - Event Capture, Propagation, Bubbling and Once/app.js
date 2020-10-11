const divs = document.querySelectorAll("div");

function logText(e) {
  //   e.stopPropagation();
  console.log(this.classList.value);
}

divs.forEach((div) =>
  div.addEventListener("click", logText, { capture: 0, once: 1 })
);

document
  .querySelector("button")
  .addEventListener("click", logText, { once: 1 });
