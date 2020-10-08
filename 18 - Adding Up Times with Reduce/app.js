const times = [...document.querySelectorAll("li")].map((el) => el.dataset.time);

const totalTime = times.reduce((acc, cur) => {
  const minuteSecond = cur.split(":");
  const second = parseInt(minuteSecond[0]) * 60 + parseInt(minuteSecond[1]);

  return acc + second;
}, 0);

console.log(times, totalTime);
