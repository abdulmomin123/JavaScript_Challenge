const hl = document.querySelector(".highlight");
const links = document.querySelectorAll('[href=""]');

links.forEach((link) =>
  link.addEventListener("mouseenter", function (e) {
    const dimentions = this.getBoundingClientRect();
    hl.style.width = `${dimentions.width}px`;
    hl.style.height = `${dimentions.height}px`;
    hl.style.transform = `translateX(${dimentions.left}px)`;
    hl.style.transform = `translate(${dimentions.left}px, ${dimentions.top}px)`;

    console.log(this.getBoundingClientRect());
  })
);
