const panels = document.querySelectorAll(".panel");
const text = document.querySelectorAll(
  ".panel :first-child, .panel :last-child"
);

const init = () => {
  panels.forEach((el) => {
    el.onclick = () => {
      el.classList.toggle("panel-open-2");
    };

    el.addEventListener("transitionend", () => {
      el.classList.toggle("panel-open");
    });
  });
};

init();
