const times = [...document.querySelectorAll("li")].map((el) => el.dataset.time);

const totalTime = times.reduce((acc, cur) => {
  const second = cur.split(":");

  console.log(second);
}, 0);

console.log(times, totalTime);
