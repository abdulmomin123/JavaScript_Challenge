const hl = document.querySelector(".highlight");
const links = document.querySelectorAll('[href=""]');

links.forEach((link) =>
  link.addEventListener("mouseenter", function (e) {
    const dimentions = this.getBoundingClientRect();
    hl.style.width = `${dimentions.width}px`;
    hl.style.height = `${dimentions.height}px`;
    hl.style.transform = `translate(${dimentions.left + window.scrollX}px, ${
      dimentions.top + window.scrollY
    }px)`;

    console.log(this.getBoundingClientRect());
  })
);
