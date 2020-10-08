const times = [...document.querySelectorAll("li")].map((el) => el.dataset.time);

// Using map
const seconds = times
  .map((el) => {
    const [mins, secs] = el.split(":").map(parseFloat);

    return mins * 60 + secs;
  })
  .reduce((acc, cur) => acc + cur);

let secondsLeft = seconds;
const hour = secondsLeft / 3600;

// const totalTime = times.reduce((acc, cur) => {
//   const minuteSecond = cur.split(":");
//   const second = parseInt(minuteSecond[0]) * 60 + parseInt(minuteSecond[1]);

//   return acc + second;
// }, 0);

// console.log(times, totalTime);
