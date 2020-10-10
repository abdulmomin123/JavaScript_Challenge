const hl = document.querySelector(".hl");
const links = document.querySelectorAll('[href=""]');

links.forEach((link) =>
  link.addEventListener("mouseenter", function (e) {
    hl.style.width = `${this.getBoundingClientRect().width}px`;
    hl.style.height = `${this.getBoundingClientRect().height}px`;
    hl.style.transform = `translateX(${this.getBoundingClientRect().left}px)`;
    hl.style.transform = `translate(${this.getBoundingClientRect().left}px, ${
      this.getBoundingClientRect().top
    }px)`;

    console.log(this.getBoundingClientRect());
  })
);
