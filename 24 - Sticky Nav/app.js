const body = document.querySelector("body");
const nav = document.querySelector("#main");
const navTop = nav.offsetTop;

function toggleClass() {
  if (window.scrollY >= navTop) {
    body.style.paddingTop = `${nav.offsetHeight}px`;
    body.classList.add("fixed-nav");
  } else {
    body.style.paddingTop = 0;
    body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", toggleClass);
