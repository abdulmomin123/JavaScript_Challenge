const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 7;

const shadow = (e) => {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 3px rgba(255,0,0,1),
  ${xWalk * -1}px ${yWalk * -1}px 3px rgba(0,255,0,1),
  ${yWalk}px ${xWalk * -1}px 3px rgba(0,0,255,1),
  ${yWalk * -1}px ${xWalk}px 3px rgba(200,0,255,1)
  `;
};

hero.addEventListener("mousemove", shadow);
