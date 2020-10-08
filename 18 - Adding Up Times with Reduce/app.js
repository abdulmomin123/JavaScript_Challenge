const times = [...document.querySelectorAll("li")].map((el) => el.dataset.time);

// Using map
const seconds = times
  .map((el) => {
    const [mins, secs] = el.split(":").map(parseFloat);

    return mins * 60 + secs;
  })
  .reduce((acc, cur) => acc + cur);

let secondsLeft = seconds;
const hour = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minute = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
// const totalTime = times.reduce((acc, cur) => {
//   const minuteSecond = cur.split(":");
//   const second = parseInt(minuteSecond[0]) * 60 + parseInt(minuteSecond[1]);

//   return acc + second;
// }, 0);

// console.log(times, totalTime);
