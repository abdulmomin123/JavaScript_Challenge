const spacing = document.querySelector("#spacing");
const blur = document.querySelector("#blur");
const base = document.querySelector("#base");
const img = document.querySelector("img");

const arr = [spacing, blur, base];

const init = () => {
  let userSpacing = img.style.setProperty("--spacing", `${spacing.value}px`);
  let userBlur = img.style.setProperty("--blur", `${blur.value}px`);
  let userBase = img.style.setProperty("--color", `${base.value}`);

  console.log(spacing.value, blur.value, base.value);
};

arr.forEach((el) => {
  el.onchange = () => {
    init();
    console.log("hi");
  };
  el.onmousemove = () => {
    init();
    console.log("hi");
  };
});
