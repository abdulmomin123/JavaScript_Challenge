const links = document.querySelectorAll("li");
const dropdowns = document.querySelectorAll(".dropdown");
const bg = document.querySelector(".dropdownBackground");

function displayBG(e) {
  const dimentions = this.querySelector(".dropdown").getBoundingClientRect();
  const dimentions2 = this.querySelector("a").getBoundingClientRect();

  bg.style.display = "flex";
  this.querySelector(".dropdown").style.transition = "all 0.5s 0.1s";
  bg.style.width = `${dimentions.width}px`;
  bg.style.height = `${dimentions.height}px`;
  bg.style.opacity = 1;
  bg.style.transform = `translate(${
    dimentions2.left - dimentions.width / 2 + dimentions2.width / 2
  }px, ${dimentions2.top}px)`;

  this.querySelector(".dropdown").style.opacity = 1;
  this.querySelector(".dropdown").style.visibility = "visible";
}

function removeBG(e) {
  this.querySelector(".dropdown").style.transition = "none";
  this.querySelector(".dropdown").style.visibility = "hidden";

  // bg.style.display = "none";
}

links.forEach((link) => link.addEventListener("mouseenter", displayBG));
links.forEach((link) => link.addEventListener("mouseleave", removeBG));
