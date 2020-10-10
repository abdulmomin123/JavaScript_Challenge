const hl = document.querySelector(".hl");
const links = document.querySelectorAll('[href=""]');

links.forEach((link) =>
  link.addEventListener("mouseover", (e) => {
    hl.style.width = `${e.target.clientWidth}px`;
    hl.style.height = `${e.target.clientHeight}px`;
    hl.style.top = `${e.clientY}px`;
    hl.style.left = `${e.clientX}px`;

    console.log(e.target.clientWidth);
  })
);
