const links = document.querySelectorAll("li");
const dropdowns = document.querySelectorAll(".dropdown");
const bg = document.querySelector(".dropdownBackground");

function changeBG(e) {
  const dimentions = this.querySelector("a").getBoundingClientRect();

  bg.style.width = `${dimentions.width}px`;
  bg.style.height = `${dimentions.height}px`;
  bg.style.opacity = 1;
  bg.style.transform = `translate(${dimentions.left}px, ${dimentions.top}px)`;
  console.log("hi");
}

links.forEach((link) => link.addEventListener("mouseover", changeBG));
