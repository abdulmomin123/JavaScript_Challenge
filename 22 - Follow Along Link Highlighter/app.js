const hl = document.querySelector(".hl");
const links = document.querySelectorAll('[href=""]');

links.forEach((link) =>
  link.addEventListener("mouseover", (e) => {
    console.log(this.getComputedStyle(e.target).width);
    hl.style.width = this.getComputedStyle(e.target).width;
    hl.style.height = this.getComputedStyle(e.target).height;
    hl.style.top = `${e.clientY}px`;
    hl.style.left = `${e.clientX}px`;
  })
);
