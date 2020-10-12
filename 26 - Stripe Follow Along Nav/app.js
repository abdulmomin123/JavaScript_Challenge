const links = document.querySelectorAll("li");
const dropdowns = document.querySelectorAll(".dropdown");
const bg = document.querySelector(".dropdownBackground");

function displayBG(e) {
  const dimentions = this.querySelector(".dropdown").getBoundingClientRect();
  const dimentions2 = this.querySelector("a").getBoundingClientRect();

  bg.style.width = `${dimentions.width}px`;
  bg.style.height = `${dimentions.height}px`;
  bg.style.opacity = 1;
  bg.style.transform = `translate(${dimentions2.left}px, ${dimentions2.top}px)`;

  this.querySelector(".dropdown").style.opacity = 1;
  this.querySelector(".dropdown").style.visibility = "visible";
}

function removeBG(e) {
  console.log(e);
}

links.forEach((link) => link.addEventListener("mouseenter", displayBG));
links.forEach((link) => link.addEventListener("mouseleave", removeBG));
