// Elements
const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const second = document.querySelector(".second-hand");

const time = () => {
  const orHour = new Date().getHours();
  let localHour = orHour;

  if (orHour > 12) localHour = orHour - 12;

  console.log(localHour);

  let rotationSec = new Date().getSeconds() * 6 + 90;
  let rotationMin = new Date().getMinutes() * 6 + 90;
  let rotationHour = localHour * 30 + 90;

  setInterval(() => {
    //  rotate the hands
    // second hand
    second.style.transform = `rotate(${rotationSec}deg)`;

    // minute hand
    min.style.transform = `rotate(${rotationMin}deg)`;

    // hour hand
    hour.style.transform = `rotate(${rotationHour}deg)`;

    rotationSec += 6;
    rotationMin += 0.1;
    rotationHour += 0.0041666666666667;
  }, 1000);
};

window.onload = () => {
  time();
};
