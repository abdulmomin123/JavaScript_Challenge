const body = document.querySelector("body");
const nav = document.querySelector("#main");

function toggleClass(e) {
  const navTop = nav.offsetTop;

  if (window.scrollY >= navTop) {
    body.style.paddingTop = `${nav.offsetHeight}px`;
    body.classList.add("fixed-nav");
  } else {
    body.style.paddingTop = 0;
    body.classList.remove("fixed-nav");
  }
  console.log(navTop);
}

window.addEventListener("scroll", toggleClass);
