const times = [...document.querySelectorAll("li")].map((el) => el.dataset.time);

const totalTime = times.reduce((acc, cur) => {
  const minuteSecond = cur.split(":");

  return acc + parseInt(minuteSecond[0]);
}, 0);

console.log(times, totalTime);
